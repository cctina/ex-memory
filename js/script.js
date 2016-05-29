$(function() {
	// check jquery imported or not
	// $('header').append('<p>jQuery loaded successfully!<p>');	

	// set hover animation on albums
	$album = $(".album");
	$album.hover(
		//mouse enter
		function(){
		    $(this).animate({
		    	opacity: 0.5
		    }, 300);
		},
		//mouse leave 
		function(){
		    $(this).animate({
		    	opacity: 1
	    	}, 300);
		}
	); 
});

