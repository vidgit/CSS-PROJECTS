var togSet=false;

/**
 * @return {[type]}
 */
(function(){
	var body = $('body');
	$('.menu-toggle').bind('click',function(){
		body.toggleClass('menu-open');
		togSet=!togSet;
		return false;
	});
})();

/**
 * @return {[type]}
 */
(function(){
	$('.menu-side').hover(function(){
		var body = $('body');
		body.addClass('menu-open');
	},
		function(){
		var body = $('body');
		if(!togSet)
		body.removeClass('menu-open');
		});
})();

