var optimist = require("optimist");

for (var key in optimist.argv){
  console.log(key, ": ", optimist.argv[key]);
};
