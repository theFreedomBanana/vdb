var articleController = angular.module('articleController', []);

articleController.controller('LexpoAffichesCtrl', ['$scope', '$http',
	'$location', 'BasketItems', function($scope, $http, $location, BasketItems) {
		$http.get('/articles/vuesdenbaslexpo/affiches.json').success(function(data) {
			$scope.photos = data;
		});
		$scope.changeUrl = function(url) {
			$location.url("articles/"+url);
		};
		$scope.columns = "col-xs-6 col-sm-4 col-lg-3";
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
		$scope.text_price = "Affiches originales 40x60cm en édition limitée, signées et numérotées sur cadapac prêtes à accrocher: 80€";
}]);

articleController.controller('LexpoPhotosCtrl', ['$scope', '$http',
	'$location', 'BasketItems', function($scope, $http, $location, BasketItems) {
		$http.get('/articles/vuesdenbaslexpo/photos.json').success(function(data) {
			$scope.photos = data;
		});
		$scope.changeUrl = function(url) {
			$location.url("articles/"+url);
		};
		$scope.columns = "col-xs-6 col-sm-4 col-md-6 col-lg-4";
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
		$scope.text_price = "Photos originales 40x60cm en édition limitée, signées et numérotées sur cadapac prêtes à accrocher: 80€";
}]);

articleController.controller('LexpoPostersCtrl', ['$scope', '$http',
	'$location', 'BasketItems', function($scope, $http, $location, BasketItems) {
		$http.get('/articles/vuesdenbaslexpo/posters.json').success(function(data) {
			$scope.photos = data;
		});
		$scope.changeUrl = function(url) {
			$location.url("articles/"+url);
		};
		$scope.columns = "col-xs-6 col-sm-4 col-lg-3";
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
		$scope.text_price = "Reproductions poster 40x60cm papier poster gloss : 20€ (frais d'envois inclus en France métropolitaine)";
}]);

articleController.controller('200For141500PhotosCtrl', ['$scope', '$http',
	'$location', 'BasketItems', function($scope, $http, $location, BasketItems) {
		$http.get('/articles/200for141500/photos.json').success(function(data) {
			$scope.photos = data;
		});
		$scope.changeUrl = function(url) {
			$location.url("articles/"+url);
		};
		$scope.columns = "col-xs-6 col-sm-4 col-lg-3";
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
		$scope.text_price = "Photos originales 40x60cm en édition limitée, sur Dibond, prêtes à accrocher: 200€";
}]);