var bookshelf = require('../models/connection');
var Users = require('../models/users')(bookshelf);
var Candidate = require('../models/candidate')(bookshelf, Users);
var CONST = require('../consts');

module.exports = function (req, res) {
	if (req.session.user.account_type == CONST.ACCOUNT_TYPE_STUDENT) {
		Candidate
		.forge({uid: req.session.user.id})
		.fetch().then(function(candidate) {
			Candidate.getRegisteredStudents(candidate.get('program'))
			.then(function (programRegisteredUser) {				
				res.json(programRegisteredUser.toJSON());
			}).catch(function (e) {console.log(e);});
		}).catch(function(e) {console.log(e);});

		// Todo: getCandidatesBy(Candidate.forge({uid: req.session.user.id}).fetch(), 'program' ).then().catch()
		// getCandidatesBy(candidate, program)
		// return candidate.then(function(candidate) {
			// this.forge({program: candidate.get(program)}).fetchAll().then(function(all){
				// return all;
			// }).catch(function(e){return e;})
		//}).catch(function(e){ return e; })
	}

}