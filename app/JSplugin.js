(function loadScripts(){
   var directory = 'script/';
   var extension = '.js';
   var files = ['model', 'view', 'controller'];  
   for (var file of files){ 
       var path = directory + file + extension; 
       var script = document.createElement("script");
       script.src = path;
       document.body.appendChild(script);
   } 
 })();