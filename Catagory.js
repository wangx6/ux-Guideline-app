(function(window){
	'use strict';

	var Catagory = function( data, type ){
		this.type = type || 'others';
		this.data = data;
		this.items = [];
		this.catCtnr = $('<div>');

		this.init();
	};

	Catagory.prototype.init = function () {

		var i,
			item = null,
			self = this;

		this.catCtnr
			.html(this.type)
			.addClass('cat-ctnr')
			.attr('data-cat-type', self.type);

		for(i in this.data){
			item = new Item(this.data[i]);
			this.items.push(item);
		}
	};

	Catagory.prototype.getItems = function(){
		return this.items;
	};

	window.Catagory = Catagory;

})(window);