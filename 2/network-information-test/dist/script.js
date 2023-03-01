const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const conTypeDOM = document.querySelector('.connection-val-type');
const conTypeBefDOM = document.querySelector('.connection-before');
const conTypeDownDOM = document.querySelector('.connection-val-down');
const conTypeRTTDOM = document.querySelector('.connection-val-rtt');

let type;
let updateConnectionStatus = function () {
	// Network type that browser uses (estimate)
	let messageType = connection.effectiveType;
	
	// Effective bandwidth estimate
	let messageDown = connection.downlink;
	
	// Effective bandwidth estimate
	let messageRTT = connection.rtt;
	let messageBef = '(was ' + type + ' before)';
	conTypeDOM.innerHTML = messageType;
	
	if ( type ) {
		conTypeBefDOM.innerHTML = messageBef;
		type = connection.effectiveType;
	}
	
	if ( messageDown ) {
		conTypeDownDOM.innerHTML = '▼ ' + messageDown + ' Mb/s';
	}
	
	if ( messageRTT ) {
		conTypeRTTDOM.innerHTML = '🢐 🢒 ' + messageRTT + ' ms';
	}
	
	console.log( messageType + ' ' + messageBef, 'Download:' + messageDown );
}

updateConnectionStatus();
connection.addEventListener('change', updateConnectionStatus);