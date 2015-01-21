;100%
function(jquery){
	'use strict';

	var _dataHandler = new DataHandler(),
		_uxHandler = new UXGuidelineHandler();

	_dataHandler.http('data/data.json', 'GET', function( data ){
		_uxHandler.init(data);
	});

}(window.jQuery);