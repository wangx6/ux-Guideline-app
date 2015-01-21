(function($, window ){
	'use strict';


	var UXGuidelineHandler = function ( data ) {
		this.data = data;
		this.ctnr = $('.item-ctnr');
		console.log(this.data);

		this.init();
	};

	UXGuidelineHandler.prototype.init = function(){
		console.log('hell i am herer');
	};

	window.UXGuidelineHandler = UXGuidelineHandler;

})( jQuery, window );