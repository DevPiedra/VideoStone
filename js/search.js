$(document).ready(function() {
  var key = 'AIzaSyCnTUV53jlU8RPeT2GHrvjxf6YON9KUKJ0';
  var URL = 'https://www.googleapis.com/youtube/v3/search';

  var options = {
    part: 'snippet',
    key: key,
    maxResults: 20
  }
});

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}

