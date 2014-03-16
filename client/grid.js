Template.grid.helpers({
  snapshots: function () {
    return Snapshots.find({}, {sort: {timestamp: -1}, limit: 12});
  }
});