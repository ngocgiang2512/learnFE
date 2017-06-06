module.export = {
  //...
}

/* ------------------------------------------ */

var config = {
  //...
}
module.exports = config;

/* ------------------------------------------ */

// basic configuration
{
  context: __dirname + "/app",
  entry: "./entry",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  }
}