'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CreatetournamentCtrl
 * @description
 * # CreatetournamentCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CreatetournamentCtrl', function ($scope, $http, $log, $location, $cookieStore) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var tournament = {};
    var err = undefined;

    $scope.createTournament = function(){
      var user = $cookieStore.get("user");
      $scope.tournament.tOrganizer = user;
      //$scope.createTournament.$setPristine(true);
      $http.post('api/createTournament', $scope.tournament)
        .success(createTournamentSuccess)
        .error(createTournamentError);
    };

    var createTournamentError = function (data, status) {
      if(status === 400)
      {
        $scope.err = data;
        console.log($scope.err);
      }
    };

    var createTournamentSuccess = function (data, status) {
      //if(status === 200)
      //$scope.$emit('changeDashboardView', {id: -1, name: 'Manage Publications', url: 'views/publication.html'});
    };
  });
