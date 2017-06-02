// Express is a Node.js web application framework
// source: https://expressjs.com/

var express = require('express')

// The app object denotes the Express application, use express() function
var app = express()

// Routes an HTTP request, where METHOD is the HTTP method of the request, such as GET, PUT, POST, and so on, in lowercase
// https://expressjs.com/en/4x/api.html#app.METHOD
app.get('/', function(req, res){
  res.send('hello express')
})

// Binds and listens for connections on the specified host and port
// https://expressjs.com/en/4x/api.html#app.listen
app.listen(3000);
/* ------------------------------------------ */
app.listen(3000, function(){
  console.log('Server listening on port: 3000')
})
/* ------------------------------------------ */
app.listen(3000, () => console.log('Server listening on port: 3000'));
/* ------------------------------------------ */
process.env.PORT = 3000;
app.listen(process.env.PORT, () => console.log('Server listening on port: %s', process.env.PORT));