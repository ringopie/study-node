/*設定を外部ファイルに出力する練習*/

var settings = require("./setting.js");

var http = require("http");
var server = http.createServer();

server.on("request", function(req, res){
  res.writeHead(200, {"Content-type": "text/plain"});
  res.write("Hello world");
  res.end();
});

server.listen(settings.port, settings.host);
console.log("server listening...");
