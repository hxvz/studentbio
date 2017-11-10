var bookshelf = require('../../models/connection');

var Users = require('../../models/users')(bookshelf);
var Candidate = require('../../models/candidate')(bookshelf, Users);

module.exports = function(req, res) {
	var program = req.params.program || null;

	Candidate.getRegisteredStudents(program)
	.then(function (programRegisteredUser) {				
		res.json(programRegisteredUser.toJSON());
	}).catch(function (e) {console.log(e);});
}