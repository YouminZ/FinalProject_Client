'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LogoutPageCtrl
 * @description
 * # LogoutPageCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LogoutPageCtrl', function ($scope, $http, $cookieStore, $location) {

    $scope.backToMain = function () {
      $location.path("/main")
    }
  })

