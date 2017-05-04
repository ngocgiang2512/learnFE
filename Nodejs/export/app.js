/* basic */
require('./hello.js');

/* pattern 1 - define a global */
require('./foo.js');
foo();

/* pattern 2 - export an anonymous function */
var bar = require('./bar.js');
bar();

/* pattern 3 - export a named function */
var fiz = require('./fiz.js').fiz;
fiz();

/* pattern 4 - export an anonymous object */
var buz = require('./buz.js');
buz.log();

/* pattern 5 - export a named object */
var baz = require('./baz.js').Baz;
baz.log();

/* pattern 6 - export an anonymous prototype */
var Doo = require('./doo.js');
var doo = new Doo();
doo.log();

/* pattern 7 - export a named prototype */
var Qux = require('./qux.js').Qux;
var qux = new Qux();
qux.log();

/* intro */
// Our code use require to include modules, modules use exports to make things available
// named exports: one modules - many exported things
// anonymous exports: simpler client interface
// exports is an alias/shortcut to module.exports
// source: http://darrenderidder.github.io/talks/ModulePatterns