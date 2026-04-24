// Challenge 9: Juggling Async
// This program sends HTTP GET requests to three different URLs.
// Since HTTP requests finish asynchronously, they may complete in a different order.
// The goal is to collect all three responses, then print them in the original URL order.

var http = require('http')
var bl = require('bl')

// results stores the response text from each URL.
// Each response is saved at the same index as its URL argument.
var results = []

// count keeps track of how many HTTP requests have finished.
var count = 0

// This function prints the collected results in order.
// It is only called after all three HTTP requests are complete.
function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

// This function sends one HTTP GET request.
// The index tells us which command-line URL to use and where to store the result.
function httpGet (index) {

  // process.argv[2 + index] gets one of the three URLs from the terminal.
  // index 0 uses process.argv[2], index 1 uses process.argv[3], and index 2 uses process.argv[4].
  http.get(process.argv[2 + index], function (response) {

    // The response is a stream, so data may arrive in multiple chunks.
    // bl collects all chunks before running the callback.
    response.pipe(bl(function (err, data) {

      // If this request had an error, print it and stop handling this response.
      if (err)
        return console.error(err)

      // Convert the collected Buffer data into readable text.
      // Store it in the results array at the matching index so output order is preserved.
      results[index] = data.toString()

      // Increase count because one request has finished successfully.
      count++

      // Once all three requests have finished, print all results in the original order.
      if (count == 3)
        printResults()
    }))
  })
}

// Start all three HTTP requests.
// They run asynchronously, so they are started in order but may finish in any order.
for (var i = 0; i < 3; i++)
  httpGet(i)
