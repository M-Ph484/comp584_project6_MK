//https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
//and https://nodejs.org/api/http2.html
// Challenge 12: HTTP Uppercaserer
// This program creates an HTTP server that accepts POST request data,
// converts the incoming text to uppercase, and sends the uppercase text back as the response.

// Load Node.js's built-in HTTP module.
// The http module lets us create a server that can receive and respond to web requests.
var http = require('http')

// Load the external through2-map module.
// through2-map is used to transform stream data as it passes through.
// In this challenge, we use it to convert each incoming chunk of request data to uppercase.
var map = require('through2-map')

// createServer() creates an HTTP server.
// The callback runs every time a client sends a request to this server.
// req represents the incoming request from the client.
// res represents the outgoing response that we send back to the client.
var server = http.createServer(function (req, res) {

  // This challenge only expects POST requests.
  // If the request is not POST, end the response early with a short message.
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  // req is a readable stream, meaning the request body may arrive in chunks.
  // pipe() sends those chunks through the map() transform.
  req.pipe(map(function (chunk) {

    // Each chunk starts as Buffer data.
    // toString() converts the chunk into readable text.
    // toUpperCase() changes the text to uppercase.
    // Returning the uppercase text sends the transformed chunk forward.
    return chunk.toString().toUpperCase()

  // After map() transforms the incoming data, pipe(res) sends it back to the client.
  })).pipe(res)
})

// process.argv[2] stores the port number provided by Learn You Node.
// Number() converts the port from a string into a number.
// server.listen() starts the server on that port and waits for incoming requests.
server.listen(Number(process.argv[2]))
