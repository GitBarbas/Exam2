

	/* Grille Masonry*/

	$('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-sizer',
	  percentPosition: true
	});

	/* Slider */

	$('.carousel').carousel({
		interval: 2000
	});

	/* Menu mobile */

	$('.fa-bars').on('click', function(){
		$('#headermobile').fadeIn('slow');
	});
	$('#headermobile i').on('click', function(){
		$(this).parent('#headermobile').fadeOut('slow');
	});
	/* Lien */

	$('#encours').on('click', function(e){
		e.preventDefault();
		$('.encours').slideDown('slow');
	});
	$('.encours').on('click', function(){
		$(this).slideUp('slow');
	});