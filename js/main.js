$(document).ready(function () {

var num = 16;

function genGrid() {
	
	for(var i = 0; i < (num); i++) {
		var $row = $('<div class="row"></div>');
		$('.container').append($row.clone());
	}

	for(var i = 0; i < (num); i++) {
		var $square = $('<div class="square"></div>');
		$('.row').append($square.clone());
	}

	var calc = 100/num;
	calc = calc - (calc * .01);

	$('.row').css({'height': calc + '%'});
	// $('.square').css({'height': (100/num) + '%'});
	$('.square').css({'width': calc + '%'});

	$('.square').on('mouseenter', function() {
		$(this).addClass('color');
		var currentColor = $(this).css('background-color');
		$(this).css({'border-color': currentColor});
	});
}

genGrid();

$('button').on('click', function() {
	$('.row').remove();
	num = +(prompt('How many squares, yo?'));
	genGrid();

});

});