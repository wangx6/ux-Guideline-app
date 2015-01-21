(function( $, window ){
	'use strict';

	var DataHandler = function(){
		this.data;
	};

	DataHandler.prototype.http = function(url, reqType, callback){
		$.ajax({
			url: url,
			type: reqType,
			dataType: 'json',
			success: function( data ){
				callback( data );
			}
		})
		.fail(function(err){
			console.log(err);
		});
	};

	window.DataHandler = DataHandler;

})(window.jQuery, window);