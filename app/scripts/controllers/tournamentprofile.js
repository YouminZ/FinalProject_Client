'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TournamentprofileCtrl
 * @description
 * # TournamentprofileCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TournamentprofileCtrl', function ($scope, $http, $cookieStore, $location, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];




    $scope.getTournament = function () {
      $http.get('/api/getTournament'+ $routeParams.tournament, null)
        .success(tournamentSuccess)
        .error(tournamentFailure);
    }

    var tournamentSuccess = function (data, status) {
      $scope.tournament = data;
    }

    var tournamentFailure = function(data, status) {
    };





    $scope.init = function () {
      $scope.user = $cookieStore.get('user');
      console.log($scope.user);

      $scope.getTournament();

      $scope.isSaving = false;
    }
    $scope.init();
  });
