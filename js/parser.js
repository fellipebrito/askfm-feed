function parseRSS(url, container) {
  $.ajax({
    url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      //console.log(data.responseData.feed);
      $.each(data.responseData.feed.entries, function(key, value){
        var html = '<h3>'+value.title+'</h3>';
        html = html + '<a href="'+value.link+'" target="_blank">'+value.link+'</a>';
        $(container).append(html);
      });
    }
  });
}

/**
 * Capitalizes the first letter of any string variable
 */
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
