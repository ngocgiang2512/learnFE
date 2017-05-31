// var express = require('express');
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './generated/app';

const app = express();

app.get('/', (request, response) => {
  // response.send('Hello world from Express');
  response.send(ReactDOMServer.renderToString(<App />));
});

app.listen(8000, () => console.log('Server running on port: 8000'));
