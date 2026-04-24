//used https://nodejs.org/api/http.html#httpgetoptions-callback
//and https://joecreager.com/learnyounode-lesson-8-http-collect/ (had issues with dependency conflicts with this one in particular)
// Challenge 8: HTTP Collect
// This program sends an HTTP GET request, collects the full response,
// then prints the total character count and the complete response text.

// Load Node.js's built-in HTTP module.
// The http module is used to make HTTP requests to web servers.
const http = require('http')

// Load the external bl module.
// bl stands for Buffer List. It helps collect multiple chunks of streamed data
// into one complete value before we use it.
const bl = require('bl')

// process.argv[2] stores the URL provided from the terminal.
// Example: node program.js http://example.com
// In that example, process.argv[2] would be the URL.
http.get(process.argv[2], function (response) {

  // HTTP responses arrive as streams, meaning the data may come in multiple chunks.
  // pipe() sends all chunks from the response stream into bl().
  // bl() waits until the entire response has been received before running this callback.
  response.pipe(bl(function (err, data) {

    // If there was a problem collecting the response data, print the error and stop.
    if (err) {
      return console.error(err)
    }

    // data is collected as Buffer data, so toString() converts it into readable text.
    const result = data.toString()

    // Print the number of characters in the full response.
    console.log(result.length)

    // Print the complete response text.
    console.log(result)
  }))
})
