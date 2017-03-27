/**/

var settings = require("./setting.js");
var __dirname = ""

var http = require("http");
var fs = require("fs"),
    ejs = require("ejs"),
    qs = require("querystring");
server = http.createServer();
var templates = fs.readFileSync(__dirname + "./public_html/bbs.ejs", "utf-8");

var posts = [];
function renderForm(posts, res){
  var data = ejs.render(templates, {
    posts: posts
  });
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(data);
  return res.end();
}

server.on("request", function(req, res){
  if (req.method === "POST"){
    req.data = "";
    req.on("readable", function(){
        req.data += req.read();
    });
    req.on("end", function(){
      var query = qs.parse(req.data);
      posts.push(query.name.replace(/null/g, ""));
      renderForm(posts, res);
    });
  } else{
    renderForm(posts, res);
  }
});

server.listen(settings.port, settings.host);
console.log("server listening...")
