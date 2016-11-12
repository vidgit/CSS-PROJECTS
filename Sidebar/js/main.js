var togSet=false;
(function(){
	var body = $('body');
	$('.menu-toggle').bind('click',function(){
		body.toggleClass('menu-open');
		togSet=!togSet;
		return false;
	});
})();
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