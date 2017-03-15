$(function(){

	fillesBubbleClick();

});


function fillesBubbleClick(){
	$('.face').on('click', function(){

		var $this =$(this),
			faceDist = $this.position().top,
			faceTarget = -1 * (faceDist -150);

			console.log(faceTarget);

			$this.parent().css('top', +faceTarget+'px')

			$this.addClass('textBaloon')
				.siblings().removeClass('textBaloon');

	});

	$('.face:nth-child(1)').addClass('textBaloon');

	//click a face***
	//get distance to most left position***
	//move container according to its position***
	//place to off screen picsto the other side
	// then add the textBaloon class***


};

