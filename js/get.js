function get(url){
	return new Promise(function(resolve, reject){
		
		var req = new XMLHttpRequest();
		req.open('GET',url,true);
		req.setRequestHeader("Accept","application/json");
		req.onload = function(){
			if(req.status == 200){
				resolve(JSON.parse(req.response));
			}else{
				reject(req.statusText);
			}
		}
		
		req.send();
	});
}