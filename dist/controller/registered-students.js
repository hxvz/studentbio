var bookshelf = require('../models/connection');
var Users = require('../models/users')(bookshelf);

module.exports = function (req, res) {
	return res.send("completed.")
  Users.getRegisteredStudents().then(function(allStudents) {
    
  })
}