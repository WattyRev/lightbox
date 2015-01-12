/**
 * Lightbox State Management
 * Requires jQuery
 * This file updates the url with get parameters that allows for triggering
 * lightbox via link, and for allowing the lightbox to remain active during
 * refresh or bookmarking
 */

$(function() {
	var checked;
	var q = window.location.search.replace('?', '').split('&');
	for (i = 0; i < q.length; i++) { 
    	var query = q[i];
    	if (query.split('=')[0] === 'lb') {
    		checked = query.split('=')[1];
    	}
	}
	$('#' + checked).attr('checked', 'checked');
	$('.lightbox>input').change(function(){
		var _checked, 
			url, 
			id = $(this).attr('id');
		if ($(this).is(':checked')) {
			_checked = id;
		} else {
			if (checked === id) {
				_checked = '';
			} else {
				_checked = checked;
			}
		}
		if (checked || checked === '') {
			url = location.href.replace('lb='+checked, 'lb='+_checked);
		} else {
			if (q[0] !== '') {
				url = location.href + '&lb='+_checked;
			} else {
				url = location.href + '?lb='+_checked;
			}
		}
		checked = _checked;
		history.pushState(null, null, url);
	});

});