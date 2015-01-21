( function( $, window ){
	'use strict';

	var Item = function( data ){
		this.data = data;
		this.ctnr = $('<li>').addClass('item-blk').hide();
		this.title = $('<h3>');
		this.expandBox = $('<div>');

		this.init();
	};

	Item.prototype.init = function(){
		
		var self = this,
			i;

		this.title
			.html( self.data.name )
			.appendTo( self.ctnr );

		for(i in this.data.css){
			$('<li>')
				.html( i+': '+this.data.css[i]+';' )
				.appendTo( self.ctnr );
		}
	};

	window.Item = Item;

} )(window.jQuery, window);