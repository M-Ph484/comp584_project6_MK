//reference for help -https://nodejs.org/api/fs.html#fspromisesreaddirpath-options
//and https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
// Challenge 5: Filtered LS
// This program reads a folder and prints only the files that match a specific file extension.

// Load Node.js's built-in File System module.
// We need fs.readdir() so the program can read the contents of a directory.
var fs = require('fs')

// Load Node.js's built-in Path module.
// The path module helps safely work with file paths and file extensions.
var path = require('path')

// process.argv[2] is the directory path provided from the terminal.
// process.argv[3] is the file extension we want to filter by, such as "txt" or "js".
var dir = process.argv[2]
var filterStr = process.argv[3]

// This function reads a directory, filters the file list, and sends the result to a callback.
// A callback is a function passed into another function to run later, usually after async work finishes.
function getFiles(dir, filterStr, callback) {

  // fs.readdir() asynchronously reads the directory.
  // When it finishes, Node.js runs the callback with either an error or the list of files.
  fs.readdir(dir, function (err, list) {

    // If an error happened, immediately pass it to the callback and stop the function.
    // This follows Node.js's common "error-first callback" pattern.
    if (err)
      return callback(err)

    // filter() creates a new array containing only files that pass the test below.
    list = list.filter(function (file) {

      // path.extname(file) gets the file extension, including the dot.
      // For example, path.extname("notes.txt") returns ".txt".
      // filterStr does not include the dot, so we add "." before comparing.
      return path.extname(file) === '.' + filterStr
    })

    // Pass null as the first argument because there was no error.
    // Pass the filtered list as the second argument.
    callback(null, list)
  })
}

// Call getFiles() using the directory and extension from the command line.
getFiles(dir, filterStr, function (err, list) {

  // If getFiles() reported an error, print it to the terminal.
  if (err)
    return console.error('There was an error:', err)

  // Print each matching filename on its own line.
  list.forEach(function (file) {
    console.log(file)
  })
})
