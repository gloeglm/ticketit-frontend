'use strict';

/**
 * @ngdoc function
 * @name ticketitFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ticketitFrontendApp
 */
angular.module('ticketitFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
