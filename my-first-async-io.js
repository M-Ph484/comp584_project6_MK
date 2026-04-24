//reference for help -https://nodejs.org/api/process.html#processargv 
//and https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
// Challenge 4: My First Async I/O
// This program reads a file asynchronously and counts how many newline characters it contains.

// require('fs') loads Node.js's built-in File System module.
// The fs module lets this program read files from the computer.
var fs = require('fs')

// process.argv[2] stores the file path passed in from the terminal.
// Example: node program.js file.txt
// In that example, process.argv[2] would be "file.txt".
var file = process.argv[2]

// fs.readFile() reads the file asynchronously.
// "Asynchronously" means Node.js starts reading the file, but does not freeze the entire program while waiting.
// When the file is finished loading, Node.js runs the callback function below.
fs.readFile(file, function (err, contents) {

  // err would contain error information if something went wrong while reading the file.
  // Learn You Node usually gives a valid file, so this solution does not need extra error handling.

  // contents is returned as a Buffer, which is raw file data.
  // toString() converts that Buffer into normal readable text.
  // split('\n') breaks the text into an array wherever a newline character appears.
  // The number of newline characters is one less than the number of array items, so we subtract 1.
  var lines = contents.toString().split('\n').length - 1

  // Print the final newline count to the terminal.
  console.log(lines)
})
