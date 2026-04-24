//used https://nodejs.org/api/http.html
//and https://nodejs.org/api/http.html#httpgeturl-options-callback
var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
    response.setEncoding('utf8');
    
    response.on('error', function(err) {
       console.error(err);
    });
    
    response.on('data', function(data) {
        console.log(data);
    });
});
