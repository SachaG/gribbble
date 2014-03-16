Meteor.publish('snapshots', function(limit, skip) {
  return Snapshots.find({}, {sort: {timestamp: -1}, limit: limit, skip: skip});
});