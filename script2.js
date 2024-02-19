function pushReviewsToSpreadsheet(movieTitle) {
  var apiKey = "YOUR_API_KEY";
  var reviews = getMovieReviews(movieTitle);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("Reviews") || ss.insertSheet("Reviews");
  var lastRow = ws.getLastRow() + 1;
  ws.getRange(lastRow, 1, reviews.length, 1).setValues([reviews]);
}
