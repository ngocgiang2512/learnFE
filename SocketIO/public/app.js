var socket = io('http://localhost:8000');

socket.on('server-send-data', function(data){
  $('#content').append(data + ', ');
});

$('document').ready(function(){
  $('#sendData').on('click', function(){
    socket.emit('client-send-data', 'hello');
  });
})