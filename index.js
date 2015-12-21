var objectFlip = function(obj) {
	if (typeof obj !== 'object') {
		return obj;
	}

	var resultObj = {};
	var supportedTypes = ['string', 'number'];

	for(key in obj) {
		var value = obj[key];
		if ( supportedTypes.indexOf( typeof value ) >= 0 ) {
			resultObj[value] = key;
		}
	}

	return resultObj;
}

module.exports = objectFlip;