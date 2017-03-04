$("#searchButton").on("click", function(event){
	// prevents reloading of page
	event.preventDefault();
	var term= $("#search-input").val().trim();
	var recordsRequested= $("#records-input").val();
	var startYear=$("#start-input").val().trim();
	var endYear=$("#end-input").val().trim();
	var word= encodeURI(term);
	


	var authKey= "45ae6c35b10b457cbd8fd3541a4afc7d";

	var queryURL= "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey
	 + "&q="+word;
	 // + "?begin_date=19500101" + "?end_date=20170101";
	
	//+"&begin_date="+startYear+"&end_date="+endYear+"&hl=true";

	$.ajax({
		url: queryURL,
		method: "GET"
		}).done(function(responseNY) {
		var results= responseNY.response.docs;
		console.log(responseNY);
		// empty container to avoid duplicate results
		$("#articles").empty();
		for (i=0; i< recordsRequested; i++){
			var articleDiv = $("<div class ='results'>");
			var title = $("<a class='headlineAnchor'>").text( i + 1 + "." + results[i].headline.main);
			title.attr("href", results[i].web_url);
			title.attr("target", "_blank");
			var lineBreak = $("<br>");
			var section = $("<p>").text("Section: " + results[i].section_name);
			var pubDate = $("<p>").text("Dates: " + results[i].pub_date);
			var artURL = $("<a>").text(results[i].web_url);
			artURL.attr("href", results[i].web_url);
			artURL.attr("target", "_blank");

			articleDiv.append(title);
			articleDiv.append(lineBreak);
			articleDiv.append(section);
			articleDiv.append(pubDate);
			articleDiv.append(artURL);

			$("#articles").append(articleDiv);
		}
	});
});

$('#clearButton').on('click', function(){
	$("#articles").empty();
})
			
