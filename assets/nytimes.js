$("#searchButton").on("click", function(event){
	// prevents reloading of page
	event.preventDefault();
	var term= $("#search-input").val().trim();
	var recordsRequested= $("#records-input").val();
	var startYear=$("#start-input").val().trim().toString();
	var endYear=$("#end-input").val().trim().toString();
	var word= encodeURI(term);
	var January="0101";
	var December="1231";

	if(startYear===""){
		startYear="20000101";
	}
	else{
		// concatonates the month and day to match the requested date format for the API
		startYear.concat(January);
	}
	if(endYear===""){
		endYear="20171231";
	}
	else{
		endYear.concat(December);
	}

	var authKey= "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
	var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
	authKey + "&q="+word+"&begin_date="+startYear+"&end_date="+endYear+"&hl=true";

	$.ajax({
		url: queryURL,
		method: "GET"
		}).done(function(responseNY) {
		var results= responseNY.response.docs;
		// empty container to avoid duplicate results
		$("#articles").empty();
		for (i=0; i< recordsRequested; i++){
			var articleDiv = $("<div class ='results'>");
			var title = $("<a class='healineAnchor'>").text( i + 1 + "." + results[i].headline.main);
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

			
