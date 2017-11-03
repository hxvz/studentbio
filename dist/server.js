var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();


app.use(cors());
app.use(serveStatic(__dirname));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.route('/create').post(require('./controller/create'));
app.route('/student').get(require('./controller/registered-students'));
app.get('/student/:id', require('./controller/student'));
app.get('/student/edit/:id', require('./controller/update-student'));

app.get('/remove', function(){});


var port = process.env.PORT || 5000;
app.listen(port);


