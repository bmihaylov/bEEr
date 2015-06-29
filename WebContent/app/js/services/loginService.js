'use strict';
app.factory('loginService', function($http, $location, sessionService) {
	var isloggedIn = true;
	return {
		login: function(data, scope) {

			if (data.mail === 'admin@beer.com' && data.pass === 'admin') {
				isloggedIn = true;
				$location.path('/home');
			}
			else {
				scope.msgtxt = 'incorrect information';
				isloggedIn = false;
				$location.path('/login');
			}

			// var $promise=$http.post('data/user.php',data); //send data to user.php
			// $promise.then(function(msg){
			// 	var uid=msg.data;
			// 	if(uid){
			// 		//scope.msgtxt='Correct information';
			// 		sessionService.set('uid',uid);
			// 		$location.path('/home');
			// 	}	       
			// 	else  {
			// 		scope.msgtxt='incorrect information';
			// 		$location.path('/login');
			// 	}				   
			// });
		},
		logout: function() {
			// sessionService.destroy('uid');
			isloggedIn = false;
			$location.path('/login');
		},
		islogged: function() {
			return isloggedIn;
			// var $checkSessionServer = $http.post('data/check_session.php');
			// return $checkSessionServer;
			/*
			if(sessionService.get('user')) return true;
			else return false;
			*/
		}
	}

});