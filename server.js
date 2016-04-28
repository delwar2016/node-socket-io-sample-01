/**
 * Created by delwar on 4/28/16.
 */
var http = require("http");
var url = require('url');
var fs = require('fs');
var io = require('socket.io');


var server = http.createServer(function(request, response){
  var path = url.parse(request.url).pathname;
  console.log(' Path :', path);

  switch(path){
    case '/':
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write('hello world');
      response.end();
      break;
    case '/socket.html':
      fs.readFile(__dirname + path, function(error, data){
        if (error){
          response.writeHead(404);
          response.write("opps this doesn't exist - 404");
          response.end();
        }
        else{
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(data, "utf8");
          response.end();
        }
      });
      break;
    case '/lib/socket.io.js':
      fs.readFile(__dirname + path, function(error, data) {
        response.writeHead(200, {"Content-Type": "text/javascript"});
        response.write(data, "utf8");
        response.end();
      });
      break;
    default:
      response.writeHead(404);
      response.write("opps this doesn't exist - 404");
      response.end();
      break;
  }
});

server.listen(8001);

var listener = io.listen(server);
listener.sockets.on('connection', function(socket){
  setInterval(function(){
    socket.emit('sayhello', {'date': new Date()});
  }, 1000);

  socket.on('sendFromClient', function(data){
    console.log('response from client', data.data);
  });
});