const express = require('express')
const app = express()

app.get('/', function(req, res){
  res.send('hello express')
})

app.listen(3000, function(){
  console.log('App listening on port 3000')
})