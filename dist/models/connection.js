var knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: './db.db'
	},
	useNullAsDefault: true
});

module.exports = require('bookshelf')(knex);