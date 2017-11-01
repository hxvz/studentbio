const REGULAR_ACCOUNT = 2;

module.exports = function(bookshelf){
  return bookshelf.Model.extend({  
    tableName: 'users',
    hasTimestamps: true,
    
    errorMessage: null,
    hasError: function() {
      return this.errorMessage != null;
    }
  }, {
    byUsername: function(username) {
      return this.forge().query({where:{ username: username }}).fetch();
    },
    registerNewUser: function(user) {
      this.errorMessage = null;
      return this.forge(
        {
          username: user.username,
          password: user.password,
          account_type: REGULAR_ACCOUNT
        }).save().catch(function(e) {
          console.log(e);
          this.errorMessage = e;
          return this;
        })
    }
  }

  );
}