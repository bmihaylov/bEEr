'use strict';

app.controller('ticketCtrl', ['$scope', function($scope){
    $scope.tickets=[{userName: "Ivan Ivanov", name: "Fix this bug"},
        {userName: "Petar Ivanov", name: "Fix this bug"},
        {userName: "Georgi Ivanov", name: "Fix that bug"},
        {userName: "Bozhidar Ivanov", name: "Fix fuck bug"}];
}]);