//https://nodejs.org/api/net.html#class-netserver
//and also https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
// Challenge 11: HTTP File Server
// This program creates an HTTP server that sends the contents of a file as the response.

// Load Node.js's built-in HTTP module.
// The http module lets us create a web server that can respond to browser/client requests.
var http = require('http')

// Load Node.js's built-in File System module.
// The fs module lets us read files from the computer.
var fs = require('fs')

// process.argv[2] stores the port number passed in from the terminal.
// Learn You Node provides this port automatically when using the verify command.
var portNumber = process.argv[2]

// process.argv[3] stores the path to the file that should be sent back to the client.
var fileToRead = process.argv[3]

// createServer() creates an HTTP server.
// The callback runs every time the server receives a request.
// request contains information about the incoming client request.
// response is used to send data back to the client.
var server = http.createServer(function (request, response) {

  // createReadStream() opens the file as a readable stream.
  // A stream sends data in chunks instead of loading the whole file into memory at once.
  // This is useful for serving files because it is more efficient, especially for large files.
  var stream = fs.createReadStream(fileToRead)

  // pipe() connects the file stream directly to the HTTP response.
  // As the file is read, its contents are sent to the client.
  stream.pipe(response)
})

// server.listen() starts the HTTP server on the provided port.
// Once listening, the server waits for incoming requests.
server.listen(portNumber)
