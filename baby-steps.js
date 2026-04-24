//reference for help -https://nodejs.org/api/process.html#processargv
// Challenge 2: Baby Steps
// This program adds together numbers that are provided when the file is run from the terminal.

// process.argv is an array that stores command-line arguments.
// The first two values are usually:
// process.argv[0] = the path to Node.js
// process.argv[1] = the path to this JavaScript file
// The actual numbers typed by the user start at index 2.
var result = 0

// Start at index 2 so we only read the user-provided numbers.
// Loop through every command-line argument after the file name.
for (var i = 2; i < process.argv.length; i++)
  // process.argv values are strings by default, so Number() converts each one into a number.
  // Each converted number is added to the running total stored in result.
  result += Number(process.argv[i])

// Print the final sum to the terminal.
console.log(result)
