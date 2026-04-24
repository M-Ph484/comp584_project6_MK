//used https://nodejs.org/api/net.html#class-netserver
// Challenge 10: Time Server
// This program creates a TCP server that sends the current date and time to a client,
// then closes the connection.

// Load Node.js's built-in net module.
// The net module is used to create TCP servers and clients.
var net = require('net')

// This helper function adds a leading zero to numbers less than 10.
// For example, 7 becomes "07".
// This is needed because the required date format expects two digits for month, day, hour, and minute.
function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

// This function builds the current date and time in the format required by Learn You Node:
// YYYY-MM-DD hh:mm
function now () {

  // Create a Date object representing the current date and time.
  var d = new Date()

  // getFullYear() returns the four-digit year.
  // getMonth() returns months starting at 0, so January is 0 and December is 11.
  // We add 1 so the displayed month matches the normal calendar month.
  // getDate(), getHours(), and getMinutes() return the current day, hour, and minute.
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

// createServer() creates a TCP server.
// The callback runs every time a client connects to this server.
// The socket represents the connection between the server and that client.
var server = net.createServer(function (socket) {

  // socket.end() sends data to the client and then closes the connection.
  // A newline character is added because the challenge expects the output to end with a new line.
  socket.end(now() + '\n')
})

// process.argv[2] stores the port number passed in from the terminal.
// Number() converts it from a string into a number.
// server.listen() starts the server and waits for client connections on that port.
server.listen(Number(process.argv[2]))
