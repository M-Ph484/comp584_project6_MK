//the main solution for challenge 6. uses: https://nodejs.org/api/modules.html as a reference
var mymodule = require('./06-mymodule');

var directory = process.argv[2]  
var ext = process.argv[3];

mymodule(directory, ext, function(err, files) {
    if (err) {
        return console.error('error:', err);
    }
    
    files.forEach(function(file) {
        console.log(file);
    });
});
