module.exports = function (bookshelf) {
  return bookshelf.Model.extend({
    tableName: 'candidate',
    hasTimestamps: false,
    errorMessage: null,
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
        skill_set: candidate.skill_set.join(','),
        email: candidate.email
      }).save().catch(function(e) {
        console.log(e);
        this.errorMessage = e;
        return this;
      })
    }
  })
}