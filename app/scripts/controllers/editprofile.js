'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EditprofileCtrl
 * @description
 * # EditprofileCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EditprofileCtrl', function ($scope, $http, $location) {
    $(document).scrollTop(0);

    $scope.cancelUpdate = function(){
      $location.path("/playerprofile");
    }
  });
