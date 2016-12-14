var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Node via Jenkins with mocha!!");
});

app.listen(4000);