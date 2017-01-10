source:
https://www.sitepoint.com/understanding-requirejs-for-effective-javascript-module-loading/

require(["a","b","c"],function(a,b,c){
})

["a","b","c"]: depedencies (example:purchase), RequireJS only considers .js files
function(a,b,c){...}: anonymous function which takes an object that is used to call the functions inside the dependent file

products.js and credits.js are configured as independent modules - meaning they are not dependent on anything.

Using require() vs. define()
- the require() function is used to run immediate functionalities
- define() is used to define modules for use in multiple locations

RequireJS uses Asynchronous Module Loading (AMD) for loading files.
RequireJS allows us to use the shim config to define the sequence of files which need to be loaded in correct order.