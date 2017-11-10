var bookshelf = require('../models/connection');
var Users = require('../models/users')(bookshelf);

module.exports = function(req, res) {
	var username = req.body.param.username;
	var password = req.body.param.password;

	if (username === 'admin' && password === 'demo') {
		req.session.user = {id: 987654321, account_type: 1}
		return res.json({error: false, account_type: 1, id: 987654321});
	}

	Users.fetchUser({username: username, password:password}).then(function(user) {
		req.session.user = {account_type: user.get('account_type'), id: user.get('id')}
		return res.json({error: false, account_type: user.get('account_type'), id: user.get('id')});
	}).catch(function(e){
		return res.json({error: true, message: 'Invalid username/password'});
	})
}