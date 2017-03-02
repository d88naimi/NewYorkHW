
// search button function
  $("#searchButton").on("click", function(event) {
    // prevent from reload of page 
    event.preventDefault();
    var searchTerm = $("#searchTerm").val().trim();
    var recordNum = $("#recordNum").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    // var that links to the api
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    // storing the values inside a object
    var parameterObj = {
      authKey: "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
      q: searchTerm,
      begin_date: startYear + "0101",
      end_date: endYear + "0101"
    };
    // callback from ajax
    $.ajax({
      url: queryURL + $.param(parameterObj),
      method: "GET"
    })
    // when done read the response
    .done(function(response){
      // make a .empty(); div for all the results  
      $("#resultsDiv").empty();
    // store the response to a var 
    var news = $('div class="newsDiv">');
    // store the search response
    
    // using for loop diplay all results 
    // for ( var 1 = 0; i < results; i++) {
    //   articleCounter++
    
    // }

   

    // loops shoould run the anount of results chosend by user 
    // 


    });

  });

 


