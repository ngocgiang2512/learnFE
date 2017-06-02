// In Node.js, each file is treated as a separate module
// https://nodejs.org/api/modules.html

// bar.js
module.exports = function() {
  console.log('bar!');
}

// app.js
var bar = require('./bar.js');
bar();

