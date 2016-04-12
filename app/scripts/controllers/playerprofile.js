'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PlayerprofileCtrl
 * @description
 * # PlayerprofileCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PlayerProfileCtrl', function ($scope, $http, $cookieStore, $location, $routeParams) {
    $(document).scrollTop(0);

    $scope.user = $cookieStore.get('user');
    console.log($scope.user);


    $scope.login = function () {
      $http.post('/api/playerprofile', $scope.authInfo).success(loginSuccess).error(loginFailure);
    }



    $scope.getProfile = function () {
      $http.get('/api/getProfile?search_string=' +
          $routeParams.profile, null)
        .success(profileSuccess)
        .error(profileFailure);
    }

    var profileSuccess = function (data, status) {
      $scope.player = data;
    }

    var profileFailure = function(data, status) {
    };





    $scope.init = function () {
      $scope.player = null;

      if ($routeParams.profile != null) {
        $scope.getProfile();
      } else {
        //player = some generic profile, or something
      }
      $scope.isSaving = false;
    }
    $scope.init();

  });
