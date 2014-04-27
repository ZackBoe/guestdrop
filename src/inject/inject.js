chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		console.log("Guestdrop here!");

		var currentUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;

		function addParameter(url, param, value) {

		    var val = new RegExp('(\\?|\\&)' + param + '=.*?(?=(&|$))'),
		        qstring = /\?.+$/;
		    
		    if (val.test(url)) return url.replace(val, '$1' + param + '=' + value);
		    else if (qstring.test(url)) return url + '&' + param + '=' + value;
		    else return url + '?' + param + '=' + value;
		}

		var queryString = '&'+(document.location+'?').split('?')[1];

		if(!queryString.match(/&mode=guest_open/)) window.location.href = addParameter(currentUrl, 'mode', 'guest_open');

	}
	}, 10);
});