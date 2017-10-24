var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(serveStatic(__dirname));

app.post('/create', function(){});

app.get('/students', function(){});

app.get('/edit', function(){});

app.get('/remove', function(){});

var port = process.env.PORT || 5000;
app.listen(port);