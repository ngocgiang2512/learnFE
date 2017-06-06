// Module
// https://nodejs.org/api/modules.html
// In Node.js, each file is treated as a separate module

// bar.js
module.exports = function() {
  console.log('bar!');
}

// app.js
var bar = require('./bar.js');
bar();

/* ------------------------------------------ */

// Path
// https://nodejs.org/api/path.html
// The path module provides utilities for working with file and directory paths. It can be accessed using:
cons path = require('path');

