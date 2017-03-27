/*htmlファイルを読み込んでみる*/

var settings = require("./setting.js");

var http = require("http");
var fs = require("fs");
server = http.createServer();

var __dirname = ""
var msg;
server.on("request", function(req, res){
  fs.readFile(__dirname + "./public_html/hello.html", "utf-8", function(err, data){
    if (err) {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("not found!");
      return res.end();
    }
    res.writeHead(200, {"Content-Type": "html"});
    res.write(data);
    return res.end();
  });
});

server.listen(settings.port, settings.host);
console.log("server listening...")
