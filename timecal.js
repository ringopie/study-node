function measureSin(count){
  console.time("for-loop")
  for (var i = 0; i < count; i++){
    console.log(Math.sin(Math.PI));
  }
  console.timeEnd("for-loop");
};

function main(){
  measureSin(5000);
};

main();
