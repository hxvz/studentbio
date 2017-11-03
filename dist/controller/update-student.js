var bookshelf = require('../models/connection');
var User = require('../models/users')(bookshelf);

module.exports = function (req, res) {
  res.send('console.sk')
}