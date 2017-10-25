var bookshelf = require('./connection');

module.exports = bookshelf.Model.extend({
	tableName: 'students',
	hasTimestamps: true,
}, {
	
})