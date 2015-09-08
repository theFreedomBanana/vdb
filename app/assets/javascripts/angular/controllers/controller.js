var articleController = angular.module('articleController', []);

articleController.controller('LexpoAffichesCtrl', ['$scope', '$http',
	'$location', 'BasketItems', function($scope, $http, $location, BasketItems) {
		$http.get('/articles/vuesdenbaslexpo/affiches.json').success(function(data) {
			$scope.photos = data;
		});
		$scope.changeUrl = function(url) {
			$location.url("articles/"+url);
		};
		$scope.columns = "col-xs-12 col-sm-4 col-md-3";
		$scope.colored1 = "colored";
		$scope.basket = BasketItems.get();
		$scope.total = BasketItems.calculateTotal();
		$scope.add = function(p){
			BasketItems.addItem(p);
			$scope.total = BasketItems.calculateTotal();
		};
		$scope.remove = function(p){
			BasketItems.removeItem(p);
			$scope.total = BasketItems.calculateTotal();
		};
}]);

articleController.controller('LexpoPhotosCtrl', ['$scope', '$http',
	'$location', 'BasketItems', function($scope, $http, $location, BasketItems) {
		$http.get('/articles/vuesdenbaslexpo/photos.json').success(function(data) {
			$scope.photos = data;
		});
		$scope.changeUrl = function(url) {
			$location.url("articles/"+url);
		};
		$scope.columns = "col-xs-12 col-sm-4 col-md-4";
		$scope.colored2 = "colored";
		$scope.basket = BasketItems.get();
		$scope.total = BasketItems.calculateTotal();
		$scope.add = function(p){
			BasketItems.addItem(p);
			$scope.total = BasketItems.calculateTotal();
		};
		$scope.remove = function(p){
			BasketItems.removeItem(p);
			$scope.total = BasketItems.calculateTotal();
		};
}]);

articleController.controller('LexpoPostersCtrl', ['$scope', '$http',
	'$location', 'BasketItems', function($scope, $http, $location, BasketItems) {
		$http.get('/articles/vuesdenbaslexpo/posters.json').success(function(data) {
			$scope.photos = data;
		});
		$scope.changeUrl = function(url) {
			$location.url("articles/"+url);
		};
		$scope.columns = "col-xs-12 col-sm-4 col-md-3";
		$scope.colored3 = "colored";
		$scope.basket = BasketItems.get();
		$scope.total = BasketItems.calculateTotal();
		$scope.add = function(p){
			BasketItems.addItem(p);
			$scope.total = BasketItems.calculateTotal();
		};
		$scope.remove = function(p){
			BasketItems.removeItem(p);
			$scope.total = BasketItems.calculateTotal();
		};
}]);

articleController.controller('200For141500PhotosCtrl', ['$scope', '$http',
	'$location', 'BasketItems', function($scope, $http, $location, BasketItems) {
		$http.get('/articles/200for141500/photos.json').success(function(data) {
			$scope.photos = data;
		});
		$scope.changeUrl = function(url) {
			$location.url("articles/"+url);
		};
		$scope.columns = "col-xs-12 col-sm-4 col-md-3";
		$scope.colored4 = "colored";
		$scope.basket = BasketItems.get();
		$scope.total = BasketItems.calculateTotal();
		$scope.add = function(p){
			BasketItems.addItem(p);
			$scope.total = BasketItems.calculateTotal();
		};
		$scope.remove = function(p){
			BasketItems.removeItem(p);
			$scope.total = BasketItems.calculateTotal();
		};
}]);