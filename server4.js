/*ejsを使ってページを表示してみる。*/

var settings = require("./setting.js");
var __dirname = ""

var http = require("http");
var fs = require("fs"),
    ejs = require("ejs");
server = http.createServer();
var templates = fs.readFileSync(__dirname + "./public_html/hello.ejs", "utf-8");

var n = 0;
server.on("request", function(req, res){
  n++;
  var data = ejs.render(templates, {
    title: "Hello",
    content: "<strong>World!</strong>",
    n: n
  })
  res.writeHead(200, {"Content-Type": "html"});
  res.write(data);
  return res.end();
});

server.listen(settings.port, settings.host);
console.log("server listening...")
