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
	$('.square').css({'width': calc + '%'});


}

genGrid();

$('#redo').on('click', function() {
	$('.row').remove();
	num = +(prompt('How many squares, yo?'));
	genGrid();
	genSolid();

if(!$('#colorChange').data('toggle')) {
	genRainbow();
	$('#colorChange').text('Solid');
	} else {
		genSolid();
		$('#colorChange').text('Rainbow');
	}
	$('#colorChange').data('toggle', !$('#colorChange').data('toggle'));


});

function genSolid() {
$('.square').on('mouseenter', function() {
	$(this).css({'background-color': 'rgba(0, 255, 204, .5)'});
	var currentColor = $(this).css('background-color');
	$(this).css({'border-color': currentColor});
	});
}
genSolid();

function genRainbow() {
	$('.square').on('mouseenter', function() {
	    var letters = '0123456789ABCDEF';
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	$(this).css({'background-color': color});
	$(this).css({'border-color': color});
	});
}

function genColor() {
	$('#colorChange').on('click', function() {
	$('.square').css({'background-color': 'transparent'});
	$('.square').css({'border-color': '#F2F2F2'});
	if(!$(this).data('toggle')) {
	genRainbow();
	$('#colorChange').text('Solid');
	} else {
		genSolid();
		$('#colorChange').text('Rainbow');
	}
	$(this).data('toggle', !$(this).data('toggle'));
});
}
genColor();

var opacity = .01;

$('#greyScale').on('click', function() {
	opacity = .01
	$('.square').css({'background-color': 'transparent'});
	$('.square').css({'border-color': '#F2F2F2'});
	$('.square').on('mouseenter', function() {
		$(this).css({'background-color': 'rgba(0, 0, 0, ' + opacity});
		var currentColor = $(this).css('background-color');
		$(this).css({'border-color': currentColor});
		if (opacity < 1) {
		opacity += .01;
		} else {
			opacity = .01;
		}
	});
});



});