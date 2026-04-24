//used https://nodejs.org/api/http.html#httpgetoptions-callback
//and https://joecreager.com/learnyounode-lesson-8-http-collect/ (had issues with dependency conflicts with this one in particular)
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }

    const result = data.toString()

    console.log(result.length)
    console.log(result)
  }))
})
