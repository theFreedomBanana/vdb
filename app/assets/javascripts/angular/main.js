var vuesDenBas = angular.module('vuesDenBas', [
	'ngRoute',
	'articleController',
	'basketService'
	]);

vuesDenBas.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/articles/vuesdenbaslexpo/affiches', {
	controller: 'LexpoAffichesCtrl',
	templateUrl: 'templates/articles.html'
	})
	.when('/articles/vuesdenbaslexpo/photos', {
		controller: 'LexpoPhotosCtrl',
		templateUrl: 'templates/articles.html'
	})
	.when('/articles/vuesdenbaslexpo/posters', {
		controller: 'LexpoPostersCtrl',
		templateUrl: 'templates/articles.html'
	})
	.when('/articles/200for141500/photos', {
		controller: '200For141500PhotosCtrl',
		templateUrl: 'templates/articles.html'
	});

	$locationProvider.html5Mode(true);

}]);