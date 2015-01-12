/**
 * Lightbox Fallback
 * This is the JavaScript fallback for IE8 and UE7
 */

$(function() {
	$('label').click(function() {
		var id = $(this).attr('for');

		if ($('#' + id).parents('.lightbox').length) {
			$('#' + id).siblings('.overlay').toggleClass('show');
			$('#' + id).siblings('.content').toggleClass('show');
		}
	});
});