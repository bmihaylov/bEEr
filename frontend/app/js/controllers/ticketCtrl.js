'use strict';

app.controller('ticketCtrl', ['$scope', function($scope){
    $scope.tickets=[{id: 0, userName: "Ivan Ivanov", name: "Fix this bug", description: "Sample information"},
        {id: 1, userName: "Petar Ivanov", name: "Fix this bug", description: "Sample information"},
        {id: 2, userName: "Georgi Ivanov", name: "Fix that bug", description: "Sample information"},
        {id: 3, userName: "Bozhidar Ivanov", name: "Fix fuck bug", description: "Sample information"}
    ];
}]);