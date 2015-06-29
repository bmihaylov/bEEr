'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('myApp')
    .directive('ticket', ['$location', function () {
        return {
            templateUrl: 'js/directives/ticket/ticket.html',
            restrict: 'E',
            replace: true,
            transclude: true,
            controller: function ($scope) {
                $scope.status = "IN PROGRESS"
            },
            link: function (scope, element, attrs) {
               /* var userName = attrs.userName.replace(/'/g, '');
                var name = attrs.name.replace(/'/g, '');*/
                scope.user = attrs.user;
                scope.name =  attrs.name;
            }
        }
    }]);
