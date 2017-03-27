var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Username: ", function(username){
  console.log("username is " + username + ".");
  rl.close();
});
