'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PlayersearchCtrl
 * @description
 * # PlayersearchCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PlayersearchCtrl', function ($scope, $http, $location) {
    $scope.gotoSearchTournament = function(){
      $location.path("/searchtournaments")
    }
  });
