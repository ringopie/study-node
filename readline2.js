var readline = require("readline");

//creat Interface
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//print prompt
var prompt = ">";
var indent = 2;

rl.setPrompt(prompt, indent);
rl.prompt();

//handler which accept input from username
rl.on("line", function(input){
  if(input == ">"){
    prompt = prompt + input;
    indent += 1;
    rl.setPrompt(prompt, indent);
  }
  else {
    console.log("you typed " + input + ".");
  }
  rl.prompt(false);
});
