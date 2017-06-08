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

// path.resolve([...paths])
path.resolve('/foo/bar', './baz');
// Returns: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// Returns: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// if the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'

/* ------------------------------------------ */

// __dirname
// https://nodejs.org/api/globals.html
// The directory name of the current module. This the same as the path.dirname() of the __filename.
// Example: running node example.js from /Users/mjr
console.log(__dirname);
// Prints: /Users/mjr
console.log(path.dirname(__filename));
// Prints: /Users/mjr

