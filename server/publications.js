Meteor.publish('snapshots', function(limit) {
  return Snapshots.find({}, {sort: {timestamp: -1}, limit: limit});
});