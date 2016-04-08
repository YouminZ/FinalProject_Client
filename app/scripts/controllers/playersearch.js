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
    //$scope.players = [
    //  {gamerTag: "gamertag"}
    //];

    $scope.search = function () {
      $scope.players = [];
      $http.get('/api/searchPlayers?search_string=' +
        $scope.search_string, null)
        .success(searchSuccess)
        .error(searchFailure);
    }

      var searchSuccess = function (data, status) {
          $scope.players = data;
      }

      var searchFailure = function(data, status) {
      };



    $(document).scrollTop(0);
    $scope.gotoSearchTournament = function(){
      $location.path("/searchtournaments")
    }
  });
