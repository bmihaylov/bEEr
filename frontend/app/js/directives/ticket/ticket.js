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
                $scope.status = "IN PROGRESS";
                $scope.id = 1;
            },
            link: function (scope, element, attrs) {
                scope.user = attrs.user;
                scope.name =  attrs.name;
            }
        }
    }]);
