var TestGuest = angular.module('TestGuest', [
	'ngRoute',
	'GuestControllers',
	'GuestDirectives',
	'GuestServices'
]);

TestGuest.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
			when('/guests', {
				templateUrl: 'partials/list.html',
				controller: 'GuestCtrl'
			}).
			otherwise({
				redirectTo: '/guests'
			});
}]);


