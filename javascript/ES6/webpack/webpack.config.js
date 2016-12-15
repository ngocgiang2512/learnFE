module.exports = {
  entry: {
    helloWorld: [
      'webpack-dev-server/client?http://localhost:8080',
      './js/main.js',
    ]
  },
  output: {
    filename: 'build/main.bundle.js'
  }
};
