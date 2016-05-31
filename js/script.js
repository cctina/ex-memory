$(function() {
	// check jquery imported or not
	// $('header').append('<p>jQuery loaded successfully!<p>');	
	$cover = $('#cover-tempalte');

	// set hover animation on albums
	$entry = $('.entry');
	$entry.each(function() {
		// create cover for each entry
		$img = $(this).children('figure').children('img');
		$thisCover = $cover.clone();
		$thisCover.attr('id', $(this).attr('id') + 'Cover');
		$thisCover.width($img.width());
		$thisCover.height($img.height());
		$thisCover.css('dispaly: inline-block');
		// add cover to album
		$img.before($thisCover);
	});
	$entry.hover(
		//mouse enter
		function(){
			$thisCover = $(this).children('figure').children('.cover');
			$thisCover.animate({
		    	opacity: 0.5
		    }, 300);
		},
		//mouse leave 
		function(){
			$thisCover = $(this).children('figure').children('.cover');
		    $thisCover.animate({
		    	opacity: 0.0
	    	}, 300);
		}
	);

	// set hover animation on albums
	// $album = $(".album");
	// $album.hover(
	// 	//mouse enter
	// 	function(){
	// 		$(this).animate({
	// 	    	opacity: 0.5
	// 	    }, 300);
	// 	},
	// 	//mouse leave 
	// 	function(){
	// 	    $(this).animate({
	// 	    	opacity: 1
	//     	}, 300);
	// 	}
	// ); 
});

