// when search button is clicked do this function
$("#searchButton").on("click", function(event){
	// prevents reloading of page
	event.preventDefault();
	//read the inputs from client here 
	var term= $("#search-input").val().trim();
	var recordsRequested= $("#records-input").val();
	var startYear=$("#start").val().trim();
	var endYear=$("#end").val().trim();
	// by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 
	var word= encodeURI(term);
	//nyt auth key 
	var authKey= "45ae6c35b10b457cbd8fd3541a4afc7d";
	// working begin & end date
	var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey
	 + "&q="+ word + "&begin_date=" + startYear + "0101"+ "&end_date=" + endYear + "0101" + "&hl=true";
	  
	 
	// ajax GET action of info from server 
	$.ajax({
		url: queryURL,
		method: "GET"
		}).done(function(responseNY) {
			// storing nyt response into a keyword
		var results= responseNY.response.docs;
		console.log(responseNY);
		// empty container to avoid duplicate results
		$("#articles").empty();
		// loop clients user search  term that was inputed 
		for (i=0; i< recordsRequested; i++){
			// creating a div for all the results
			var articleDiv = $("<div class ='results'>");
			//creating a title and clickable link here
			var title = $("<a class='headlineAnchor'>").text( i + 1 + "." + results[i].headline.main);
			// assighning the link to current href
			title.attr("href", results[i].web_url);
			// allow link to open in new page 
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
			
