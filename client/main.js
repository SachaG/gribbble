Session.get('skip', 0);

Deps.autorun(function(){
  Meteor.subscribe('snapshots', 12, Session.get('skip'));
});