'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoregamesCtrl
 * @description
 * # MoregamesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoregamesCtrl', function ($scope, $http, $location) {
    $(document).scrollTop(0);
    $scope.gotoPlayerSearch = function(){
      $location.path('/playersearch')
    }
    $scope.gotoSearchTournament = function(){
      $location.path("/searchtournaments")
    }
  });


