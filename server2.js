/*URLによって処理を変更してみる*/

var settings = require("./setting.js");
var http = require("http");
server = http.createServer();

var msg;
server.on("request", function(req, res){
  switch(req.url){
    case "/about":
      msg = "about this page";
      break;
    case "/profile":
      msg = "about me";
      break;
    case "/wether":
      msg = "check wether report";
      break;
    default:
      msg = "hello world!";
      break;
  }
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write(msg);
  res.end();
})

server.listen(settings.port, settings.host);
console.log("server listening...")
