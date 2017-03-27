var optimist = require("optimist");
//setting demand option and errmessage
var argv = optimist.demand(["x", "y"]).usage("Usage: $0 -x foo -y bar").argv;

for (var key in argv){
  console.log(key, ": ", argv[key]);
};
