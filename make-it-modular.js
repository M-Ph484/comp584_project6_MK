//the main solution for challenge 6. uses: https://nodejs.org/api/modules.html as a reference
// Challenge 6: Make It Modular
// This main file gets the user's command-line input and uses a separate module file
// named 06-mymodule.js to do the directory filtering work.

// require('./06-mymodule') loads our custom module from the same folder as this file.
// The ./ means "look in the current directory."
// Whatever 06-mymodule.js exports becomes stored in the mymodule variable.
var mymodule = require('./06-mymodule')

// process.argv[2] is the directory path passed in from the terminal.
// process.argv[3] is the file extension we want to filter by, such as "txt" or "js".
var directory = process.argv[2]
var ext = process.argv[3]

// Call the function exported from 06-mymodule.js.
// We pass in the directory, the extension, and a callback function.
// The module handles reading/filtering the files, then calls this callback when finished.
mymodule(directory, ext, function (err, files) {

  // If the module reports an error, print it and stop the program.
  // This follows Node.js's common "error-first callback" pattern:
  // the first callback argument is reserved for an error.
  if (err) {
    return console.error('error:', err)
  }

  // If there was no error, files contains the filtered list returned by the module.
  // forEach() loops through that list and prints each matching filename on its own line.
  files.forEach(function (file) {
    console.log(file)
  })
})
