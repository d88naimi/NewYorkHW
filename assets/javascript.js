<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Stop: It's Giphy time</title>
</head>

<body>
  <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
  <script type="text/javascript">

  $("#searchButton").on("click", function() {
    var searchTerm = $("#searchTerm").val()
    var recordNum = $("#recordNum").val()
    var startYear = $("#startYear").val()
    var endYear = $("#endYear").val()

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    var parameterObj = {
      api-key: "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
      q: searchTerm,
      begin_date: startYear + "0101",
      end_date: endYear + "0101"
    };

    $.ajax({
      url: queryURL + $.param(parameterObj),
      method: "GET"
    })

    .done(function(response){
      

    });

  });

  </script>

  <button id="">test</button>
</body>

</html>
