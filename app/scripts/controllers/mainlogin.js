'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainLoginCtrl
 * @description
 * # MainLoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainLoginCtrl', function ($scope, $http, $cookieStore, $location, $routeParams) {

    $(document).scrollTop(0);

    $scope.user = $cookieStore.get('user');
    console.log($scope.user);



  });
