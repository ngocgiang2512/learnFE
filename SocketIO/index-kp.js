var express = require('express');
var app = express();
// day 1
// app.listen(8000);

// day 2
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');

var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(8000);
// ---------

// day 1
app.get('/get', function(req, res){
  res.send('<font color=red>Nodejs, get method</font>');
});

app.post('/post', function(req, res){
  res.send('<font color=red>Nodejs, post method</font>');
});

app.get('/user/:id', function(req, res){
  var id = req.params.id;
  res.send('Parameter passed: ' + id)
});

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/hello', urlencodedParser, function(req, res){
  var u = req.body.username;
  var p = req.body.password
  res.send("username:" + u + '/password:' + p);
});
// ---------

// day 2
io.on('connection', function(socket){
  console.log('new connection: ' + socket.id);

  socket.on('disconnect', function(){
    console.log('connection disconnected ' + socket.id);
  })

  // day 3
  socket.on('client-send-data', function(data){
    console.log(socket.id + ': ' + data);

    // send data to all connecting clients
    io.sockets.emit('server-send-data', data);

    // send data to client which has sent data only
    socket.emit('server-send-data', data);

    // send data to all connecting clients without client has sent data
    socket.broadcast.emit('server-send-data', data);
  })
});

app.get('/', function(req, res){
  res.render('index');
});


