$(document).ready(function(){

	var artistNameEncoded = encodeURIComponent($( "#searchItems option:selected" ).text()).replace(/%20/g, "+");


	$.post("http://localhost:3000/newVideo",{artistName:  artistNameEncoded}, function(data, status){
	        
		console.log(JSON.parse(data).items);
		$("#searchResults").html("");
		$.each(JSON.parse(data).items, function(index, item) {
	            		
			$("#searchResults").append('<div class="data"><h2>'+item.snippet.title+'</h2><iframe class="video w100" width="640" height="360" src="//www.youtube.com/embed/'+item.id.videoId+'" frameborder="0" allowfullscreen></iframe></div>');
			console.log(data);
	          	});



	});

	$('#searchPlaylist').change(function() {

	       var artistNameEncoded = encodeURIComponent($( "#searchItems option:selected" ).text()).replace(/%20/g, "+");
	        $.post("http://localhost:3000/newVideo",{artistName:  artistNameEncoded}, function(data, status){
	        
			console.log(JSON.parse(data).items);
			$("#searchResults").html("");
			$.each(JSON.parse(data).items, function(index, item) {
		            		
				$("#searchResults").append('<div class="data"><h2>'+item.snippet.title+'</h2><iframe class="video w100" width="640" height="360" src="//www.youtube.com/embed/'+item.id.videoId+'" frameborder="0" allowfullscreen></iframe></div>');
				console.log(data);
		          	});



		});
	});

});
