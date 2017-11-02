var bookshelf = require('../models/connection');

var Users = require('../models/users')(bookshelf);
var Candidate = require('../models/candidate')(bookshelf);
//
module.exports = function (req, res) {
  var candidate = req.body.candidate;
  // candidate.skill_set = candidate.skill_set.join(',');

  Users.registerNewUser(candidate).then(function(newUser){
    
    if (newUser.hasError())
      return res.json(prepareErrorMessage(newUser));

    Candidate.saveCandidate(candidate, newUser.id).then(function (newCandidate) {

      if (newCandidate.hasError())
        return res.json(prepareErrorMessage(newCandidate))

      return res.json(newUserCreated(newCandidate.get('uid')));
    });
  });
}

function prepareErrorMessage(model) {
  return {error: true, message: model.errorMessage};
}

function newUserCreated(userid) {
  console.log('New user created.', userid);
  return {error: false, uid: userid}
}