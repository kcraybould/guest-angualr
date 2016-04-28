var GuestDirectives = angular.module('GuestDirectives', ['GuestServices']);

GuestDirectives.directive('guestDetail', function(guestComSrvc) {
	return { 
		scope : { 
			gid: '=', // guest id; = represents a two way binding, with caveats
			show: '&', // & is a function binding
		},

		controller: 'GuestDetailCtrl',

		templateUrl: 'partials/guest-details.html',	

		link: function(scope, elements,attributes) {
			scope.$watch('gid', function (value) {
				if(value) {
					guestComSrvc.findGuest( value ).then(function(resp) {
						scope.guestDetail = resp.data;
					});
				}
			}, true);
		}
	};
});

GuestDirectives.directive('rezDetail', function(guestComSrvc) {
	return {

		scope: {},

		templateUrl: 'partials/rez-details.html',

		link: function(scope, elements,attributes) {
			scope.$on('rezChange', function (event, args) {
				guestComSrvc.findRez(args
				).then(function(resp) {
					scope.rezDetail = resp.data;
				});
		    });
		},

		controller: 'GuestRezCtrl'
	};
});

GuestDirectives.directive ('modalDialog', function() {
	return {
        scope: {
        	show: '=' //show the dialog, the = is a 2 way binding with caveats
        },
        replace: true,    // replace template content with content in diretive
        transclude: true, //insert custom content into the directive
        link: function(scope, element, attrs) {
        	scope.dialogStyle = {};
        	if(attrs.width)
        		scope.dialogStyle.width = attrs.width;
        	if(attrs.height)
        		scope.dialogStyle.height = attrs.height;
       		scope.hideModal = function() {
        		scope.show = false;
        	};
        },

        template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
     };
});
