var queryAPI = function () {
  HTTP.get('http://api.dribbble.com/shots/popular?page=1&per_page=12', function(error, result){
    if(result){
      result.timestamp = new Date().getTime();
      Snapshots.insert(result);
    }
  });
}

Meteor.setInterval(function(){
  queryAPI();
}, 3600000);

Meteor.methods({
  queryFromClient: queryAPI
});