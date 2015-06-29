'use strict';
app.factory('loginService', function($http, $location, sessionService) {
	return {
		login : function(data, scope) {
			var req = {
				method : 'POST',
				url : 'http://localhost:8080/bEEr/user/login',
				headers : {
					'Content-Type' : 'application/json'
				},
				data : {
					"webUser" : {
						"username" : data.username,
						"password" : data.pass
					}
				}
			}

			$http(req).success(function() {
				console.log('go to home')
				$location.path('/home');
			}).error(function() {
				scope.msgtxt = 'incorrect information';
				$location.path('/login');
			});
		},
		logout : function() {
			var req = {
				method : 'POST',
				url : 'http://localhost:8080/bEEr/user/logout',
				headers : {
					'Content-Type' : 'application/json'
				}
			}

			$http(req).success(function() {
				$location.path('/login');
			});
		},
		islogged : function() {
			var req = {
				method : 'GET',
				url : 'http://localhost:8080/bEEr/user/isLogged'
			}

			$http(req).success(function() {
				return true;
			}).error(function() {
				return false;
			});
		}
	}

});