'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PlayerprofileCtrl
 * @description
 * # PlayerprofileCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PlayerProfileCtrl', function ($scope, $http, $cookieStore, $location) {
    $(document).scrollTop(0);

    $scope.user = $cookieStore.get('user');
    
  });
