'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoreprofilesCtrl
 * @description
 * # MoreprofilesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoreprofilesCtrl', function ($scope, $http, $location) {
    $(document).scrollTop(0);
    $scope.gotoPlayerSearch = function(){
      $location.path('/playersearch')
    }
    $scope.gotoMoreProfiles = function(){
      $location.path('/moreprofiles')
    }
    $scope.gotoSearchTournament = function(){
      $location.path("/searchtournaments")
    }
  });

