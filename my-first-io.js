//reference for help -https://nodejs.org/api/process.html#processargv 
//and https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
var fs = require('fs')  
       
var contents = fs.readFileSync(process.argv[2])  
var lines = contents.toString().split('\n').length - 1  
console.log(lines)