var http = require("http");

/*
var server = http.createServer(function (request, response){
  //ここにリクエストに関する処理を記述
  //省略してあとで書いてもいい
});
*/

var server = http.createServer();
server.on("request", function (request, response){
  //ステータスコード200でHTTPレスポンスヘッダを出力
  response.writeHead(200);

  //リクエストURLを出力
  response.write("URL: " + request.url + "\n");

  //HTTPメソッドを出力する
  response.write("Method: " + request.method + "\n");

  //HTTPヘッダーを出力する
  Object.keys(request.headers).forEach(function (key){
    response.write(key + ": " + request.headers[key] + "\n");
  });

  response.end();
});

server.listen(8080, "127.0.0.1");
