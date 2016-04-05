'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SearchtournamentsCtrl
 * @description
 * # SearchtournamentsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SearchtournamentsCtrl', function ($scope, $http, $location) {
    $scope.gotoPlayerSearch = function(){
      $location.path('/playersearch')
    }
  });