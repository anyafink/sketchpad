$(document).ready(function () {
var num = 16;
for(var i = 0; i < (num); i++) {
	var $row = $('<div class="row"></div>');
	$('.container').append($row.clone());
}

for(var i = 0; i < (num); i++) {
	var $square = $('<div class="square"></div>');
	$('.row').append($square.clone());
}


$('.row').css({'height': ((100/num) - 1) + '%'});
// $('.square').css({'height': (100/num) + '%'});
$('.square').css({'width': ((100/num) - 1) + '%'});

});