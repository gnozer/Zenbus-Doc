/*var 
noResultText = {
    'en': "No result",
    'fr': "Aucun résultat"
};*/

$(document).ready(function(){
    SimpleJekyllSearch({
      searchInput: document.getElementById('project'),
      resultsContainer: document.getElementById('searchContainer'),
      json: '/search.json',
      searchResultTemplate: "<a class='collection-item' href='{url}'>{title}</a>",
      noResultsText: "Aucun résultat"
    });
});
