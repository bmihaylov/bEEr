'use strict';
// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [ 'ngRoute', 'oc.lazyLoad', 'ui.router',
		'ui.bootstrap', 'angular-loading-bar', ]);


app.config([ '$routeProvider', '$stateProvider', '$ocLazyLoadProvider',
		function($routeProvider, $stateProvider, $ocLazyLoadProvider) {
			$routeProvider.when('/login', {
				templateUrl : 'partials/login.html',
				controller : 'loginCtrl'
			});
			$routeProvider.when('/home', {
				templateUrl : 'partials/home.html',
				controller : 'homeCtrl',
				resolve : {
					loadMyDirectives : function($ocLazyLoad) {
						return loadMyDirectives($ocLazyLoad);
					}
				}
			});

			$routeProvider.when('/tickets', {
				templateUrl : 'partials/tickets.html',
				controller : 'ticketCtrl',
				resolve : {
					loadMyDirectives : function($ocLazyLoad) {
						return loadMyDirectives($ocLazyLoad);
					}
				}
			});
			$routeProvider.when('/ticket/:id', {
				templateUrl : "partials/ticketDetails.html",
				controller : 'ticketCtrl',
				resolve : {
					loadMyDirectives : function($ocLazyLoad) {
						return loadMyDirectives($ocLazyLoad);
					}
				}
			})
			$routeProvider.when('/project', {
				templateUrl : 'partials/project.html',
				controller : 'ticketCtrl',
				resolve : {
					loadMyDirectives : function($ocLazyLoad) {
						return loadMyDirectives($ocLazyLoad);
					}
				}
			});
			$routeProvider.otherwise({
				redirectTo : '/login'
			});
		} ]);

function loadMyDirectives($ocLazyLoad) {
	return
			$ocLazyLoad
					.load({
						name : 'myApp',
						files : [
								'js/directives/header/header.js',
								'js/directives/header/header-notification/header-notification.js',
								'js/directives/sidebar/sidebar.js',
								'js/directives/ticket/ticket.js' ]
					}),
			$ocLazyLoad
					.load({
						name : 'toggle-switch',
						files : [
								"bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
								"bower_components/angular-toggle-switch/angular-toggle-switch.css" ]
					}),
			$ocLazyLoad
					.load({
						name : 'ngAnimate',
						files : [ 'bower_components/angular-animate/angular-animate.js' ]
					})
	$ocLazyLoad.load({
		name : 'ngCookies',
		files : [ 'bower_components/angular-cookies/angular-cookies.js' ]
	})
	$ocLazyLoad.load({
		name : 'ngResource',
		files : [ 'bower_components/angular-resource/angular-resource.js' ]
	})
	$ocLazyLoad.load({
		name : 'ngSanitize',
		files : [ 'bower_components/angular-sanitize/angular-sanitize.js' ]
	})
	$ocLazyLoad.load({
		name : 'ngTouch',
		files : [ 'bower_components/angular-touch/angular-touch.js' ]
	})
}

app.run(function($rootScope, $location, loginService) {
	var routespermission = '/login';
	$rootScope.$on('$routeChangeStart', function() {
		if (routespermission.indexOf($location.path()) === -1) {
			var connected = loginService.islogged();
			connected.error(function() {
				$location.path('/login');
			});
		}
	});
});