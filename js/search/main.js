var 
FUSE_OPTIONS,
FUSE,
FUSE_INDEX,
INDEX_PROMISE,
R,
callback;

/**
 * Redirection search page with parameters based on input content
 */
function searchRedirect(){
    window.location.href = R.urls.search + R.dom.selector.val(); 
}

/**
 * Utils used to get object key (path) from object value
 * @param   {Object} object [[Description]]
 * @param   {String} value  [[Description]]
 * @returns {Sring} The object key
 */
function getKeyFromValue(object, value){
    for(var key in object){
        if(object.hasOwnProperty(key) && object[key] === value){
            return key;
        }
    }
    
    return null;
}


$(document).ready(function(){
    
    FUSE_OPTIONS = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "title",
        "keywords"
      ]
    },
    FUSE,
    FUSE_INDEX,
    R = {
        urls: {
            search: "search.html?s=",
            fuseIndex: "/js/search/index.json",
            kwPic: "/images/supervision_actor.png",
            articlePic: "/images/supervision_actor.png"
        },
        dom: {
            selector: $("#project"),
            searchButton: $("#searchButton")
        }
    };
    
    get(R.urls.fuseIndex).then(function(data){
        
        FUSE_INDEX = data;
        FUSE = new Fuse(FUSE_INDEX, FUSE_OPTIONS);
        
        //FIXME 
        if(callback && typeof callback === "function"){
            callback();
        }
        
        R.dom.searchButton.click(searchRedirect);
        R.dom.selector.keyup(function(e){
            if(e.keyCode == 13){
                searchRedirect();
            }
        });
        
        R.dom.selector.on("input", function(){ 
            search = FUSE.search(R.dom.selector.val()),
            data = {},
            path = {};
            
            $.map(search, function(e){
                e.keywords.forEach(function(k){
                    data[k] = R.urls.kwPic;
                });
                
                data[e.title] = R.urls.kwPic;
                path[e.path] = e.title;
            });
                
            R.dom.selector.autocomplete({
                minLength: 0,
                data: data,
                onAutocomplete: function(e){
                    var articlePath = getKeyFromValue(path,e);
                    if(articlePath){
                        window.location.href = articlePath;
                    }else{
                        searchRedirect();
                    }
                }
         
            });
        });
    });
    
    
});