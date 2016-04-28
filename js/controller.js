var GuestControllers = angular.module('GuestControllers', []);

GuestControllers.controller('GuestCtrl', function($scope, guestComSrvc) {
	$scope.GuestSelected = null;
	$scope.guestlist = [];
	$scope.detailOpen = false;
	$scope.rezOpen = false;
	$scope.modalShow = false;
	$scope.cid = false;

	guestComSrvc.listGuests().then(function(resp) {
		$scope.guestlist = resp.data;
	});

	$scope.detailGuest = function() {
		$scope.detailOpen = true;
		$scope.rezOpen = false;
	}

	$scope.showRezDetail = function( rez ) {
		$scope.cid = rez;
		$scope.rezOpen = true;
	}
});

GuestControllers.controller('GuestDetailCtrl', function($scope, guestComSrvc) {
	$scope.detailRez = function( conf ) {
		$scope.show();
		$scope.$parent.$broadcast("rezChange", conf);
	}

	$scope.editDetails = function() {
		$scope.modalShow = !$scope.modalShow;
	}

	$scope.editGuest = function( guest ) {
		guestComSrvc.editGuest(guest
		).then(function(resp) {
			alert(resp.data.result);
		});
	}
});

GuestControllers.controller('GuestRezCtrl', function($scope, $http) {
	$scope.rezDetail = null;	
});
