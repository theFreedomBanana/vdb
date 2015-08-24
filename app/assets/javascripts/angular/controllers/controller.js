var articleController = angular.module('articleController', []);

articleController.controller('LexpoAffichesCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) {
		$http.get('/articles/vuesdenbaslexpo/posters.json').success(function(data) {
			$scope.photos = data;
		});
		$scope.changeUrl = function(url) {
			$location.url("articles/"+url);
		};
		$scope.columns = "col-xs-12 col-sm-4 col-md-3";
		$scope.colored1 = "colored"
}]);

articleController.controller('LexpoPhotosCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) {
		$http.get('/articles/vuesdenbaslexpo/photos.json').success(function(data) {
			$scope.photos = data;
		});
		$scope.changeUrl = function(url) {
			$location.url("articles/"+url);
		};
		$scope.columns = "col-xs-12 col-sm-4 col-md-4";
		$scope.colored2 = "colored"
}]);

articleController.controller('LexpoPostersCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) {
		$http.get('/articles/vuesdenbaslexpo/posters.json').success(function(data) {
			$scope.photos = data;
		});
		$scope.changeUrl = function(url) {
			$location.url("articles/"+url);
		};
		$scope.columns = "col-xs-12 col-sm-4 col-md-3";
		$scope.colored3 = "colored"
}]);

articleController.controller('200For141500PhotosCtrl', ['$scope',
	'$http', '$location', function($scope, $http, $location) {
		$http.get('/articles/200for141500/photos.json').success(function(data) {
			$scope.photos = data;
		});
		$scope.changeUrl = function(url) {
			$location.url("articles/"+url);
		};
		$scope.columns = "col-xs-12 col-sm-4 col-md-3";
		$scope.colored4 = "colored"
}]);