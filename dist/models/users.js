const REGULAR_ACCOUNT = 2;

module.exports = function(bookshelf){
  var Candidate = require('./candidate')(bookshelf);

  return bookshelf.Model.extend({  
    tableName: 'users',
    candidate: function() {
      return this.hasOne(Candidate, 'uid')
    },
    _editables: ['username', 'password', 'account_type'],
    hasTimestamps: true,
    
    errorMessage: null,
    hasError: function() {
      return this.errorMessage != null;
    },
    loadModel: function (newModel) {
      for(prop in newModel) {
        if (newModel.hasOwnProperty(prop) && this._editables.indexOf(prop) != -1) {
          this.set(prop, newModel[prop]);
        }
      }
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
    },
    getRegisteredStudents: function(program) {
      if (program)
        return this.forge().query({where: {program: program}}).fetchAll();
      return this.forge().fetch();
    },
    updateUser: function(user) {
      return this.forge({id: user.uid}).fetch({withRelated: ['candidate']}).then(function(mUser) {
        //mUser.validate(user);
        mUser.loadModel(user);
        mUser.save();
        return mUser;
      }).then(function(u){
        var mCandidate = u.related('candidate');
        user.skill_set = user.skill_set.join(',');
        mCandidate.loadModel(user);
        mCandidate.save();
        console.log(mCandidate.attributes);
        return u;
      });
    },
    getUser: function(uid) {
      this.errorMessage = null;
      return this.forge().query({where: {id: uid}}).fetch({withRelated: ['candidate']});
    },

    fetchUser: function(cond) {
      this.errorMessage = null;
      return this.forge().query({where: cond}).fetch();
    }
  }

  );
}