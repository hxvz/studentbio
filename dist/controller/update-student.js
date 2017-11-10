var bookshelf = require('../models/connection');
var User = require('../models/users')(bookshelf);

module.exports = function (req, res) {
	User.updateUser(req.body.candidate).then(function(u){
		res.json({error: false})
	}).catch(function(e){
		console.log(e);
	});
}