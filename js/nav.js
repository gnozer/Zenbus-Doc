/**
* New version of materialbox
*/


(function ($) {
  $.fn.materialbox = function () {

    return this.each(function() {

      if ($(this).hasClass('initialized')) {
        return;
      }

      $(this).addClass('initialized');

      var overlayActive = false;
      var doneAnimating = true;
      var inDuration = 275;
      var outDuration = 200;
      var origin = $(this);
      var placeholder = $('<div></div>').addClass('material-placeholder');
      var originalWidth = 0;
      var originalHeight = 0;
      var ancestorsChanged;
      var ancestor;
      origin.wrap(placeholder);


      origin.on('click', function(){
        var placeholder = origin.parent('.material-placeholder');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var originalWidth = origin.width();
        var originalHeight = origin.height();
        /*
          TODO: cchien modified 2016/May/7
          The image should not be scaled up to window's innerWidth and innderHeight.
          Instead, it should be scaled up to its "natural" width and height.

          e.g.
          An image is 600x800 in natural.
          It was put on a page with its attribute 300x400.
          The Browser Window is 1920x1080.

          When the user click on the 300x400 image on the page,
          the user expect to see it pop up with its natural size, which is 600x800.
          Not 1920xHEIGHT or WIDTHx1080.

          https://jsfiddle.net/cchien/a70gfd7k/2/

        */
        var naturalWidth = origin[0].naturalWidth;
        var naturalHeight = origin[0].naturalHeight;
        /*
          However, if the naturalWidth/Height is larger than the windowWidth/Height,
          we should use the latter to that the new image will not overflow the window.
        */
        if(naturalWidth > windowWidth){
          naturalWidth = windowWidth;
        }
        if(naturalHeight > windowHeight){
          naturalHeight = windowHeight;
        }


        // If already modal, return to original
        if (doneAnimating === false) {
          returnToOriginal();
          return false;
        }
        else if (overlayActive && doneAnimating===true) {
          returnToOriginal();
          return false;
        }


        // Set states
        doneAnimating = false;
        origin.addClass('active');
        overlayActive = true;

        // Set positioning for placeholder
        placeholder.css({
          width: placeholder[0].getBoundingClientRect().width,
          height: placeholder[0].getBoundingClientRect().height,
          position: 'relative',
          top: 0,
          left: 0
        });

        // Find ancestor with overflow: hidden; and remove it
        ancestorsChanged = undefined;
        ancestor = placeholder[0].parentNode;
        var count = 0;
        while (ancestor !== null && !$(ancestor).is(document)) {
          var curr = $(ancestor);
          if (curr.css('overflow') !== 'visible') {
            curr.css('overflow', 'visible');
            if (ancestorsChanged === undefined) {
              ancestorsChanged = curr;
            }
            else {
              ancestorsChanged = ancestorsChanged.add(curr);
            }
          }
          ancestor = ancestor.parentNode;
        }

        // Set css on origin
        origin.css({position: 'absolute', 'z-index': 1000})
        .data('width', originalWidth)
        .data('height', originalHeight);

        // Add overlay
        var overlay = $('<div id="materialbox-overlay"></div>')
          .css({
            opacity: 0
          })
          .click(function(){
            if (doneAnimating === true)
            returnToOriginal();
          });
          // Animate Overlay
          // Put before in origin image to preserve z-index layering.
          origin.before(overlay);
          overlay.velocity({opacity: 1},
                           {duration: inDuration, queue: false, easing: 'easeOutQuad'} );

        // Add and animate caption if it exists
        if (origin.data('caption') !== "") {
          var $photo_caption = $('<div class="materialbox-caption"></div>');
          $photo_caption.text(origin.data('caption'));
          $('body').append($photo_caption);
          $photo_caption.css({ "display": "inline" });
          $photo_caption.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'});
        }

        // Resize Image
        var ratio = 0;
        var widthPercent = originalWidth / naturalWidth;
        var heightPercent = originalHeight / naturalHeight;
        var newWidth = 0;
        var newHeight = 0;

        if (widthPercent > heightPercent) {
          ratio = originalHeight / originalWidth;
          newWidth = naturalWidth * 0.9;
          newHeight = naturalWidth * 0.9 * ratio;
        }
        else {
          ratio = originalWidth / originalHeight;
          newWidth = (naturalHeight * 0.9) * ratio;
          newHeight = naturalHeight * 0.9;
        }

        // Animate image + set z-index
        if(origin.hasClass('responsive-img')) {
          origin.velocity({'max-width': newWidth, 'width': originalWidth}, {duration: 0, queue: false,
            complete: function(){
              origin.css({left: 0, top: 0})
              .velocity(
                {
                  height: newHeight,
                  width: newWidth,
                  left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
                  top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
                },
                {
                  duration: inDuration,
                  queue: false,
                  easing: 'easeOutQuad',
                  complete: function(){doneAnimating = true;}
                }
              );
            } // End Complete
          }); // End Velocity
        }
        else {
          origin.css('left', 0)
          .css('top', 0)
          .velocity(
            {
              height: newHeight,
              width: newWidth,
              left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
              top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
            },
            {
              duration: inDuration,
              queue: false,
              easing: 'easeOutQuad',
              complete: function(){doneAnimating = true;}
            }
            ); // End Velocity
        }

    }); // End origin on click


      // Return on scroll
      $(window).scroll(function() {
        if (overlayActive) {
          returnToOriginal();
        }
      });

      // Return on ESC
      $(document).keyup(function(e) {

        if (e.keyCode === 27 && doneAnimating === true) {   // ESC key
          if (overlayActive) {
            returnToOriginal();
          }
        }
      });


      // This function returns the modaled image to the original spot
      function returnToOriginal() {

          doneAnimating = false;

          var placeholder = origin.parent('.material-placeholder');
          var originalWidth = origin.data('width');
          var originalHeight = origin.data('height');

          origin.velocity("stop", true);
          $('#materialbox-overlay').velocity("stop", true);
          $('.materialbox-caption').velocity("stop", true);


          $('#materialbox-overlay').velocity({opacity: 0}, {
            duration: outDuration, // Delay prevents animation overlapping
            queue: false, easing: 'easeOutQuad',
            complete: function(){
              // Remove Overlay
              overlayActive = false;
              $(this).remove();
            }
          });

          // Resize Image
          origin.velocity(
            {
              width: originalWidth,
              height: originalHeight,
              left: 0,
              top: 0
            },
            {
              duration: outDuration,
              queue: false, easing: 'easeOutQuad'
            }
          );

          // Remove Caption + reset css settings on image
          $('.materialbox-caption').velocity({opacity: 0}, {
            duration: outDuration, // Delay prevents animation overlapping
            queue: false, easing: 'easeOutQuad',
            complete: function(){
              placeholder.css({
                height: '',
                width: '',
                position: '',
                top: '',
                left: ''
              });

              origin.css({
                height: '',
                top: '',
                left: '',
                width: '',
                'max-width': '',
                position: '',
                'z-index': ''
              });

              // Remove class
              origin.removeClass('active');
              doneAnimating = true;
              $(this).remove();

              // Remove overflow overrides on ancestors
              if (ancestorsChanged) {
                ancestorsChanged.css('overflow', '');
              }
            }
          });

        }
        });
};
	/** 
 * Handle the navigation & the URL 
 *  
 * @param e event 
 * @param id1 id of the section (Driver, Traveller or Supervision) 
 * @param id2 id of the article of the section 
 * @param lang Lang 
 * @param back true if pressing back button 
 * @returns the correct page to display 
 */ 
 
function nav_toggle() { 
  //Put the articleView button 
  var currentSection = location.pathname.split("/")[1]; 
  $('.menu li a').each(function(){ 
     var $this = $(this); 
     
      // if the current path is like this link, make it active 
       if($this.attr('href').indexOf(currentSection) !== -1 && currentSection != ""){ 
         $this.parent().addClass('active'); 
     } 
   }); 
   
  var current = location.pathname; 
  $('#nav-mobile li a').each(function(){ 
     var $this = $(this); 
         
    // if the current path is like this link, make it active 
       if($this.attr('href').indexOf(current) !== -1){ 
         $this.parent().addClass('active'); 
     } 
   }); 
} 
/** 
 * Do a scrollSpy for the article menu 
 *  
 * @param article the id of the displayed article 
 * @returns nothing 
 */ 
function scrollSpy() { 
  var categories = []; 
  var id = false; 
  var $navbar = $('article .table-of-contents'); 
  var $navbara = $('a', $navbar); 
   
  $navbara.click(function(e){ 
    e.preventDefault(); 
    $('article').animate({ 
      scrollTop: $($(this).attr('href')).offset().top-65 
    }); 
    hash($(this).attr('href')); 
  }); 
   
   
  $navbara.each(function() { 
    categories.push($($(this).attr('href'))); 
  }); 
   
  $('article').scroll(function(e) { 
    var scrollTop = $(this).scrollTop() -65; 
    for(var i in categories) { 
      var categorie = categories[i]; 
      if (scrollTop > categorie.offset().top) { 
        var scrolled_id = categorie.attr('id'); 
        } 
    } 
    if (scrolled_id !== id) { 
        id = scrolled_id 
        $navbara.removeClass('active'); 
        $('a[href="#' + id + '"]', $navbar).addClass('active'); 
    } 
  }); 
 
  hash = function(h) { 
    if (history.pushState) { 
      history.pushState(null, null, h); 
    }else{ 
      location.hash = h; 
    } 
  } 
} 
 
function setArticleView() { 
  var url = '../../../article'+document.location.pathname; 
  window.open(url, '_blank'); 
} 
$(document).ready(function(){
 // Set the button collapse for small screens 
  $(".button-collapse").sideNav({closeOnClick: true, menuWidth:650, draggable:true}); 
 
  var currentLang = $("html").attr("lang"); 
 
  scrollSpy(); 
  nav_toggle(); 
   
   
  if((location.pathname.split('/')).indexOf('article') != -1) { 
    $('article').removeClass('article').addClass('article-view'); 
     
    $('article .printButton').attr('onclick', "window.print()"); 
    $('article .printButton i').text("local_printshop"); 
     
    $('.bodybox').removeClass('l10').addClass('l12'); 
  } else { 
    $('article').removeClass('article-view').addClass('article'); 
    $('article'); 
     
    $('article .printButton').attr('onclick', "setArticleView()"); 
    $('article .printButton i').text("remove_red_eye"); 
     
    $('.bodybox').removeClass('l12').addClass('l10'); 
  } 
     
    $('.materialboxed').materialbox(); 
});


}( jQuery ));

