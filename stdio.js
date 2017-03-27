//標準入力にデータが入力された時に実行されるイベントハンドラーを定義

process.stdin.on("data", function(data){
  //入力された文字を標準出力する
  process.stdout.write("> " + data);
});

//標準入力が閉じられた時に実行されるイベントハンドラーを定義
process.stdin.on("end", function(){
  //プログラムを終了
  process.exit();
});

//標準入力からデータ受け取りを開始
process.stdin.resume();
