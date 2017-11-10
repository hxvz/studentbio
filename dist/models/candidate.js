module.exports = function (bookshelf, Users) {

  return bookshelf.Model.extend({
    tableName: 'candidate',
    user: function() {
      return this.belongsTo(Users, 'uid')
    },
    hasTimestamps: false,
    errorMessage: null,
    _editables: ['first_name', 'last_name', 'address', 'state', 'gender', 'program', 'skill_set', 'email'],
    loadModel: function (newModel) {
      for(prop in newModel) {
        if (newModel.hasOwnProperty(prop) && this._editables.indexOf(prop) != -1) {
          this.set(prop, newModel[prop]);
        }
      }
    },
    hasError: function() {
      return this.errorMessage != null;
    }
  }, {
    saveCandidate: function (candidate, uid) {

      this.errorMessage = null;
      return this.forge({
        uid: uid,
        first_name: candidate.first_name,
        last_name: candidate.last_name,
        address: candidate.address,
        state: candidate.state,
        gender: candidate.gender,
        program: candidate.program,
        skill_set: candidate.skill_set.join(', '),
        email: candidate.email
      }).save().catch(function(e) {
        console.log(e);
        this.errorMessage = e;
        return this;
      })
    },
    getRegisteredStudents: function(program) {
      if (program) {
        console.log(program);
        return this.forge().query({where: {program: program}}).fetchAll({withRelated: ['user']});
      }

      return this.forge().fetchAll({withRelated: ['user']});
    },
  })
}