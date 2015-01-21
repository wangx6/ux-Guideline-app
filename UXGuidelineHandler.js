(function($, window ){
	'use strict';


	var UXGuidelineHandler = function () {
		this.data;
		this.ctnr = $('.item-ctnr');
		this.items = [];
		this.cats = [];
		this.catsInstances = [];
		this.filterInput = $('.filter-input');
		this.filterEles = $('.filter-input');
		this.numOfEles = $('.num-of-eles');
		this.backBtn = $('.back-btn');
		this.activeType = '';
	};


	UXGuidelineHandler.prototype.init = function( data ){
		
		var i, 
			temp,
			type,
			input,
			self = this,
			catInstance;

		this.data = data;
		this.filterInput.focus();
		this.dataManager(data).initCat();

		$('.cat-ctnr').on('click', function(){
			type = $(this).attr('data-cat-type');
			self.activeType = type;
			$('.cat-ctnr').fadeOut(function(){
				self.showItems(type);
				self.backBtn.fadeIn();
			});
		});

		this.backBtn.on('click', function(){
			$('.item-blk').fadeOut().promise().done(function(){
				$('.cat-ctnr').fadeIn();
			});
			$(this).fadeOut();
		});	

		this.filterInput.on('keyup',function(){
			input = self.filterInput.val();
			self.filter(input);
		});
	};


	UXGuidelineHandler.prototype.initCat = function () {
		
		var i,
			self = this, 
			catInstance;

		for( i in this.cats ) {
			catInstance = new Catagory( this.cats[i], i );
			this.items[i] = catInstance.getItems();
			this.ctnr.append(catInstance.catCtnr);
			this.catsInstances.push(catInstance);
		}

		this.createItemHtmlEle(this.items);
	};


	UXGuidelineHandler.prototype.createItemHtmlEle = function(items){
		for(var i in items){
			for( var j in items[i]){
				items[i][j].ctnr.appendTo( this.ctnr );
			}
		}
	};


	UXGuidelineHandler.prototype.showItems = function ( type ) {
		
		var i, temp;

		for(i in this.items[type]){
			temp = this.items[type][i];
			temp.ctnr.fadeIn();
		}
		return this;
	};

	UXGuidelineHandler.prototype.hideAllCat = function(){
		for(var i in this.catsInstances){
			this.catsInstances[i].catCtnr.fadeOut();
		}
		return this;
	};

	UXGuidelineHandler.prototype.dataManager = function ( data ) {
		var temp , i;
		for(i in data.elements){
			temp = data.elements[i];
			this.cats[temp.cat] = !this.cats[temp.cat]? [] : this.cats[temp.cat];
			this.cats[temp.cat].push(temp);
		}
		return this;
	}


	UXGuidelineHandler.prototype.filter = function( filterInput ){
		console.log(filterInput)
		
		var i, temp;

		for(i in this.items[this.activeType]){
			temp = this.items[this.activeType][i];
			if(filterInput == '') {
				temp.ctnr.show();
				continue;
			} else if(temp.data.name.indexOf(filterInput) === -1){
				temp.ctnr.hide();	
			} else {
				temp.ctnr.show(); 
			}
		}
	};


	window.UXGuidelineHandler = UXGuidelineHandler;

})( jQuery, window );