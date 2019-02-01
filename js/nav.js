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

$( document ).ready(function() {
	
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
