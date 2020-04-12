(function($) {

	var	$window = $(window),
		$body = $('body');

		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center'
		});

			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});
				
				$(function () {
					var body = $('#banner');
					var backgrounds = [
					  'url("../../assets/images/projecten/machine7.jpg")', 
					  'url("../../assets/images/projecten/project2.JPG")'];
					var current = 0;
				
					function nextBackground() {
						body.css(
							'background-image',
						backgrounds[current = ++current % backgrounds.length]);
				
						setTimeout(nextBackground, 10000);
					}
					setTimeout(nextBackground, 10000);
					body.css('background-image', backgrounds);
				});
})(jQuery);