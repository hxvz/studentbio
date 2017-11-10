var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

var session = require('express-session');
var FileStore = require('session-file-store')(session);

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:8080'}));
app.use(session({
	store: new FileStore,
	secret: '923903nsdklfwsu83838',
	resave: true,
	httpOnly: false,
	saveUninitialized: false,
	cookie: {
        path: '/',
    }
}));


app.use(serveStatic(__dirname));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.route('/login').post(require('./controller/login'));
app.route('/logout').post(function(req, res){
	req.session.destroy();
	res.send('logout');
})
app.route('/create').post(require('./controller/create'));
app.route('/students').get(isLoggedIn, require('./controller/registered-students'));
app.get('/student/', isLoggedIn,  require('./controller/student'));
app.post('/student/edit/', require('./controller/update-student'));

// Admin Controllers
app.route('/admin/students/:program?').get(isAdmin, require('./controller/admin/registered-students'));
app.route('admin/student/:id').get(isAdmin, require('./controller/admin/student'));
app.route('admin/edit/:id').post(isAdmin, require('./controller/admin/edit'))

app.get('/remove', function(){});


var port = process.env.PORT || 5000;
app.listen(port);

function isLoggedIn(req, res, next) {
	if (req.session.user) {
		res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
		return next();
	}

	res.send('error not authenticated');
}


function isAdmin(req, res, next) {
	if (req.session.user && req.session.user.account_type == 1) {
		res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
		return next();
	}
	res.send('error not authorized');
}
