"use strict"
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res, next) => {
  res.send('<h1>Hello Express</h1>');
});

app.get('/dashboard', (res,req,next) => {
  res.send('<h1>this is the dashboard page</h1>');
});

app.listen(app.get('port'), () => {
  console.log('ChatCat running on port 3000');
});
