//reference for help -https://nodejs.org/api/process.html#processargv 
//and https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
var fs = require('fs')  
var file = process.argv[2]  
  
fs.readFile(file, function (err, contents) {  
  // fs.readFile(file, 'utf8', callback) can also be used  
  var lines = contents.toString().split('\n').length - 1  
  console.log(lines)  
})