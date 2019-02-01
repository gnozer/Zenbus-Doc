var 
fs = require('fs'),
path = require("path"),
jsdom = require("node-jsdom"),
index; 

(function(root, i){
   var 
   fileList = recursiveFileList(root, null, exceptions),
   promises = [];
       
   fileList.forEach(function(filePath){
        promises.push(getHTMLTags(filePath, root));
    });
    
    Promise.all(promises).then(function(values){
        fs.writeFile("../ZB_JEKYLL_DOC/js/index.json", JSON.stringify(values), function(err){
            if(err){
                console.log(err);
            }
            console.log("Index file has been saved");
        });
    });
    
})("/home/boris/eclipse-workspace2/zedbay-doc/src/main/webapp/", index);

function recursiveFileList(folderPath, fileList, exception){
    
    var 
    fileList = fileList || [];
    
    fs.readdirSync(folderPath).forEach(function(subPath){
        
        var currentPath = path.join(folderPath +"/" + subPath);
        
        if(!exception(subPath)){
            if(fs.lstatSync(currentPath).isDirectory()){
            fileList = recursiveFileList(currentPath, fileList, exception);
            }else if(path.extname(currentPath) === ".html"){
                fileList.push(currentPath);
            }
        }
    });
    
    return fileList;
}

function exceptions(p){
    return p === "en" ||  p === "article" || p === "more" || p === "documentation";
}

function cleanWord(word){
    return word.trim().replace("\n", "").replace("\t", "");
}


function getHTMLTags(htmlFile, root){
    
    return new Promise(function(resolve, reject){
        var
        fileDesc = {
            path: htmlFile.replace(root, ""),
            title: "",
            keywords: []
        };
        
        fs.readFile(htmlFile, function(err, data){
            jsdom.env({
                html: data,
                scripts: ['http://code.jquery.com/jquery-1.5.min.js'],
                done: function(errors, window){
                    
                    var 
                    $ = window.$,
                    metas = $('meta[name=keywords]');
                    
                    fileDesc.title = cleanWord($('title').text());
                    
                    metas.each(function(index, dom){
                        var content = $(dom).attr('content');

                        content = content.split(",");
                        content.forEach(function(kw){
                            if(kw){
                                fileDesc.keywords.push(cleanWord(kw));
                            }
                        });
                    });
                    resolve(fileDesc);
                }
            });
        });
    });
}