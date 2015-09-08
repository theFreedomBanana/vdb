var basketService = angular.module('basketService', []);

basketService.factory('BasketItems', [function(){
	var that = this;
	var basket = [];

	that.addItem = function(p){
		basket.push(p);
	};
	// that.removeItem = function(p){
	// 	var id = p.id;
	// 	pos = basket.map(function(e) { return e.id; }).indexOf(id);
	// 	basket.splice(pos, 1);
	// };
	that.removeItem = function(p){
		basket.splice(p, 1);
	};
	that.calculateTotal = function(){
    var total = 0;
    basket.map(function(i){ total += i.price });
    return total;
	};
	that.get = function(){
		return basket;
	};
	
	return {
		addItem : that.addItem,
		removeItem: that.removeItem,
		calculateTotal: that.calculateTotal,
		get: that.get
	};
}]);
	


// var basketService = angular.module('basketService', []);

// basketService.factory('BasketItems', [function(){
// 	var basket = [];
// 	return basket;
// }]);