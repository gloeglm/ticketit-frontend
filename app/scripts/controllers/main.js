'use strict';

/**
 * @ngdoc function
 * @name ticketitFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ticketitFrontendApp
 */
angular.module('ticketitFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
