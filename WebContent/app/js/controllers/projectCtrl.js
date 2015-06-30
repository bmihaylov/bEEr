'use strict';

app.controller('projectCtrl', ['$scope','homeService', function($scope,homeService){
	$scope.allProjects = homeService.getAllProjects();
	$scope.selectedMenu = 'dashboard';
    $scope.collapseVar = 0;
    $scope.multiCollapseVar = 0;
    
    $scope.check = function(x){
      
      if(x==$scope.collapseVar)
        $scope.collapseVar = 0;
      else
        $scope.collapseVar = x;
    };
    
    $scope.multiCheck = function(y){
      
      if(y==$scope.multiCollapseVar)
        $scope.multiCollapseVar = 0;
      else
        $scope.multiCollapseVar = y;
    };
    
    $scope.hasProjectSelected = false;
    $scope.projectSelectedName="";
    $scope.tasks=[];
    $scope.selectTasks = function(item) {
    	console.log("item: ",item);
    	$scope.projectSelectedName = item.name;
    	$scope.tasks = item.tasks;
    	$scope.hasProjectSelected = true;
	}
    
    $scope.tickets=[{id: 0, userName: "Ivan Ivanov", name: "Fix this bug", description: "Sample information"},
        {id: 1, userName: "Petar Ivanov", name: "Fix this bug", description: "Sampldsae information"},
        {id: 2, userName: "Georgi Ivanov", name: "Fix that bug", description: "Sample information"},
        {id: 3, userName: "Bozhidar Ivanov", name: "Fix fuck bug", description: "Sample information"}
    ];
}]);