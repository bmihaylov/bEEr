'use strict';

app.controller('homeCtrl', [ '$scope', 'loginService', 'homeService',
		function($scope, loginService, homeService) {
			$scope.txt = 'Page Home';
			$scope.logout = function() {
				loginService.logout();
			}
			$scope.selection = "";
			$scope.show = function(select) {
				$scope.selection = select;
			}
			$scope.comments = homeService.getNewComments();
			$scope.removeComment= function (item) {
				var index = $scope.comments.indexOf(item);
				if (index > -1) {
					$scope.comments.splice(index, 1);
				}
			}
			
			$scope.tasks = homeService.getNewTasks();
			$scope.removeTask= function (item) {
				var index = $scope.tasks.indexOf(item);
				if (index > -1) {
					$scope.tasks.splice(index, 1);
				}
			}
			
			
			$scope.projects = homeService.getNewProjects();
			$scope.removeProject= function (item) {
				var index = $scope.projects.indexOf(item);
				if (index > -1) {
					$scope.projects.splice(index, 1);
				}
			}
		} ])