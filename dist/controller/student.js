var bookshelf = require('../models/connection');
var User = require('../models/Users')(bookshelf);

module.exports = function (req, res) {
	User.getUser(req.session.user.id).then(function (user) {
		if (user.hasError())
			return res.json({error: true, message: user.errorMessage});
		user = user.toJSON();
		var candidate = user.candidate;
		delete user.candidate;
		return res.json({error: false, candidate: Object.assign(user, candidate)});
	});
}