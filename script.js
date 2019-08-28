
// document.addEventListener('DOMContentLoaded', function(e) {

setTimeout(function() {
	var url = location.href
	var splitedUrl = url.split('/')
	var container = document.body
	if (splitedUrl[2] == 'play.google.com') {
		container = document.body.childNodes[0]
	} else if (splitedUrl.length == 6) {
		container = document.getElementById('ember-app')
	} else if (splitedUrl.length == 7) {
		container = document.getElementById('ember-app')
		url = splitedUrl[0] + '//' + splitedUrl[2] +
		 			'/' + splitedUrl[3] +
		 			'/' + splitedUrl[4] +
		 			'/' + splitedUrl[6]
	}


	var qr = document.createElement('div')
	qr.id = "qrcode"
	qr.style.padding = "30px"


	document.body.insertBefore(qr, container)
	setTimeout(function() {
		var qrcode = new QRCode("qrcode")
		qrcode.makeCode(url)

	}, 500)
}, 500)
// }, false)
