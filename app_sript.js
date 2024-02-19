function getVideoTitle(videoId) {
  var url = "https://noembed.com/embed?url=https://www.youtube.com/watch?v=" + videoId;
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  return data.title;
}
