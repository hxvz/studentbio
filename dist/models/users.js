var bookshelf = require('./connection');

module.exports = bookshelf.Model.extend({  
    tableName: 'users',
    hasTimestamps: true,

    verifyPassword: function(password) {
        return this.get('password') === password;
    }
}, {
    byUsername: function(username) {
        return this.forge().query({where:{ username: username }}).fetch();
    }
});