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
function nav_toggle(e, id1, id2, lang, back) {
	if(e != null) {
		e.preventDefault();
	}	
	
	
	// SHOW THE RIGHT ARTICLE
	var $article = $("#"+id1+"-"+id2);
	if ($article.length ) {
		$(".article-view").addClass("hidden");
		$article.removeClass("hidden");
	} else {
		$(".article-view").addClass("hidden");
		$('#notFound').removeClass("hidden");
	}
	
	// PUSH THE URL
	if(!back) {
		history.pushState({"id1" : id1, "id2" : id2, "lang": lang}, null, "/article/"+lang+"/"+id1+"/"+id2);
	}
	
}


$( document ).ready(function() {

	var currentLang = $("html").attr("lang");
	var uriNav = location.pathname.split("/");
	
	
	/*$('.col.l4').each(function() {
		$(this).removeClass("l4");
		$(this).addClass("l12");
	});*/
	
	//TODO Gérer tous les cas
	if(uriNav[3] != null && uriNav[4] != null && uriNav[3] && uriNav[4]) {
		nav_toggle(null, uriNav[3], uriNav[4], currentLang, false);
	} else {
		$(".article-view").addClass("hidden");
		$('#notFound').removeClass("hidden");
	}
	
	// Listen if back button is clicked
	window.addEventListener("popstate", function(e) {
		if(e.state['id1'] != null || e.state['id2']) {
			nav_toggle(null, e.state['id1'], e.state['id2'], e.state['lang'], true);
		}
	});
});
