//reference for help -https://nodejs.org/api/process.html#processargv 
//and https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
// Challenge 3: My First I/O
// This program reads a file from the computer and counts how many newline characters it contains.

// require('fs') loads Node.js's built-in File System module.
// The fs module gives us functions for reading, writing, and working with files.
var fs = require('fs')

// process.argv[2] contains the file path that was typed after the program name in the terminal.
// readFileSync() reads the entire file before moving on to the next line of code.
// Because it is "synchronous," the program waits here until the file has been fully read.
var contents = fs.readFileSync(process.argv[2])

// readFileSync() returns a Buffer, which is raw file data.
// toString() converts the Buffer into readable text.
// split('\n') separates the text into an array every time a newline character is found.
// The number of newline characters is one less than the number of split parts, so we subtract 1.
var lines = contents.toString().split('\n').length - 1

// Print the final newline count to the terminal.
console.log(lines)
