var queryAPI = function () {
  HTTP.get('http://api.dribbble.com/shots/popular?page=1&per_page=12', function(error, result){
    if(result){
      result.timestamp = new Date().getTime();
      Snapshots.insert(result);
    }
  });
}