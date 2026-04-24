//used https://nodejs.org/api/http.html
//and https://nodejs.org/api/http.html#httpgeturl-options-callback
// Challenge 7: HTTP Client
// This program sends an HTTP GET request to a URL and prints the response data.

// Load Node.js's built-in HTTP module.
// The http module lets this program make web requests and receive web responses.
var http = require('http')

// process.argv[2] stores the URL passed in from the terminal.
// Example: node program.js http://example.com
// In that example, process.argv[2] would be "http://example.com".
var url = process.argv[2]

// http.get() sends a GET request to the provided URL.
// When the server responds, Node.js runs the callback function with the response object.
http.get(url, function (response) {

  // setEncoding('utf8') tells Node.js to treat incoming response data as readable text.
  // Without this, the data may arrive as Buffer objects instead of normal strings.
  response.setEncoding('utf8')

  // The response object is a stream, meaning data can arrive in separate chunks over time.
  // This event runs if there is an error while receiving the response.
  response.on('error', function (err) {
    console.error(err)
  })

  // The 'data' event runs whenever a chunk of response data is received.
  // Learn You Node expects each chunk to be printed as it arrives.
  response.on('data', function (data) {
    console.log(data)
  })
})
