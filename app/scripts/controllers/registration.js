'use strict';

/**
 * @ngdoc function
 * @name testProjectsApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the testProjectsApp
 */
angular.module('testProjectsApp')
  .controller('RegistrationCtrl', function ($scope, $http, $log, $parse, $location) {
    $('#login-modal').modal('hide');

    $scope.register = function(){
      $scope.registerForm.$setPristine(true);
      console.log($scope.user);
      $http.post('api/register', $scope.user)
        // Display error when server returns error
        .error(function(data, status){
          if(status === 400)
          {
            $scope.err = data;
            console.log(data);
          }
        })
        // Do something when successful
        .success(function(data, status){
//          $location.path("/home")
        })
    }
  });
