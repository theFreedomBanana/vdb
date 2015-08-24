var locationService = angular.module('locationService', []);

locationService.factory('ArticleList', ['$location',
	function($location) {
		function changeUrl(url) {
			$location.path("articles/"+url)
		};
	}]);