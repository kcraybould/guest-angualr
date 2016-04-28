var GuestServices = angular.module('GuestServices', []);

GuestServices.service('guestComSrvc', function($http) {
	var baseUrl = 'http://localhost:8080/TestServlet/rest/';
	var guestUrl = baseUrl + 'guest/';
	var listUrl = guestUrl + 'list/';
	var editUrl = guestUrl + 'edit/';
	var rezUrl = baseUrl + 'res/';

	this.listGuests = function() {
		return ($http.get(listUrl));
	}

	this.findGuest = function( id ) {
		return ( $http.get(guestUrl + id) ); 
	}

	this.findRez = function( id ) {
		return( $http.get(rezUrl + id) );
	}

	this.editGuest = function( guest ) {
		return( $http.put( editUrl + guest.id ) );
	}
});
