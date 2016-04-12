'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainLoginCtrl
 * @description
 * # MainLoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainLoginCtrl', function ($scope, $http, $cookieStore, $location) {

    $(document).scrollTop(0);

    $scope.user = $cookieStore.get('user');
    console.log($scope.user);

    $scope.login = function () {
      $http.post('/api/mainlogin', $scope.authInfo).success(loginSuccess).error(loginFailure);
    }
  });
