//used https://nodejs.org/api/http.html,  https://nodejs.org/api/http.html#responsewriteheadstatuscode-statusmessage-headers
// Challenge 13: HTTP JSON API Server
// This program creates an HTTP server with two API routes.
// One route returns the hour, minute, and second from a provided ISO date.
// The other route returns the Unix timestamp for that same date.

// Load Node.js's built-in HTTP module.
// The http module lets us create a server that can receive requests and send responses.
var http = require('http')

// Load Node.js's built-in URL module.
// The url module helps break a request URL into useful parts,
// such as the route path and query string values.
var url = require('url')

// process.argv[2] stores the port number passed in from the terminal.
// Learn You Node provides this port automatically when using the verify command.
var portNumber = process.argv[2]

// This helper function receives a Date object and returns only the time parts.
// The returned object will later be converted into JSON.
function formatDate(date) {
  return {
    // getHours(), getMinutes(), and getSeconds() extract time values from the Date object.
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

// This helper function receives a Date object and returns its Unix timestamp.
// getTime() returns the number of milliseconds since January 1, 1970.
function formateUnix(date) {
  return {
    unixtime: date.getTime()
  }
}

// createServer() creates an HTTP server.
// The callback runs every time a client sends a request to this server.
// req contains information about the incoming request.
// res is used to send the response back to the client.
var server = http.createServer(function (req, res) {

  // writeHead() sets the HTTP status code and response headers.
  // Status code 200 means the request was successful.
  // Content-Type: application/json tells the client that the response body will be JSON data.
  res.writeHead(200, { 'Content-Type': 'application/json' })

  // url.parse(req.url, true) breaks the request URL into an object.
  // The second argument, true, tells Node.js to also parse the query string.
  // Example:
  // /api/parsetime?iso=2026-04-24T10:30:15.000Z
  var urlObj = url.parse(req.url, true)

  // pathname stores the route part of the URL, such as "/api/parsetime".
  var route = urlObj.pathname

  // urlObj.query.iso stores the value of the iso query parameter.
  // new Date() converts that ISO date string into a JavaScript Date object.
  var date = new Date(urlObj.query.iso)

  // The /api/parsetime route should return the hour, minute, and second.
  if (route == '/api/parsetime') {
    var data = formatDate(date)

  // The /api/unixtime route should return the Unix timestamp in milliseconds.
  } else if (route == '/api/unixtime') {
    var data = formateUnix(date)
  }

  // JSON.stringify() converts the JavaScript object into a JSON string.
  // res.end() sends the JSON response and closes the response.
  res.end(JSON.stringify(data))
})

// server.listen() starts the HTTP server on the provided port.
// Once the server is running, it waits for incoming API requests.
server.listen(portNumber)
