var server = require('http').createServer(function(request, response) {
                console.log(request.url);
                
     // If external connections allowed, need to overcome the CORS (Cross Origin Resource Sharing) policy //
   	// Website you wish to allow to connect
	  response.setHeader('Access-Control-Allow-Origin', '*');

	  // Request methods you wish to allow
	  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	  // Request headers you wish to allow
	  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	  // Set to true if you need the website to include cookies in the requests sent
	  // to the API (e.g. in case you use sessions)
	  response.setHeader('Access-Control-Allow-Credentials', true);
  /*  
        switch (request.url.indexOf("api")){
        case 1:
              console.log('api');
              serveAPI(request, response);
        break;
        default:
              serveHTML(request, response);
        break;           
        } */
  })
  , WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ server: server })
  , host = '172.0.0.1'
  , port = 8125
  
//  , serveHTML = require("./Modules/staticServer.js")
//  , serveAPI  = require("./Modules/apiServer.js")
    , wsAPI  = require("./Modules/wsServer.js")
  ;
 
wss.on('connection', function(ws) {
 //   setInterval(wsAPI(ws), 1000); // wsAPI(ws) => socket.send(+new Date);
   setInterval(function(){
          console.log(wsAPI);
          ws.send('hi');
     }, 1000);
    ws.on('message', function(message) {
        console.log('received: %s', message);
    });
    ws.send('something');
});
 
server.listen(port, function () { console.log('Listening on ' + server.address().port) });