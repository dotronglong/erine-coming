
jQuery(document).ready(function() {
	$.backstretch("assets/img/backgrounds/1.jpg");
	new WOW().init();
    
	var launch = new Date('2017-11-11');
	var countTo = launch.valueOf();
	$('.timer').countdown(countTo, function(event) {
		$(this).find('.days').text(event.offset.totalDays);
		$(this).find('.hours').text(event.offset.hours);
		$(this).find('.minutes').text(event.offset.minutes);
		$(this).find('.seconds').text(event.offset.seconds);
	});
});

