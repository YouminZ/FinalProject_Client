'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EditprofileCtrl
 * @description
 * # EditprofileCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EditprofileCtrl', function ($scope, $http, $location, $cookieStore) {
    $(document).scrollTop(0);

    $scope.user = $cookieStore.get('user');
    //$scope.user = null;


    $scope.cancelUpdate = function(){
      //$scope.user = $cookieStore.get('user');
      $location.path("/playerprofile" + $scope.user.gamerTag);
    }

    $scope.editProfile = function() {
      //$scope.user = $cookieStore.get('user');
      $http.post('api/editProfile', $scope.user)
      .error(function(data, status) {
        if(status === 400)
        {
          $scope.err = data;
          console.log($scope.err);
        }
      })
        .success(function(data, status) {
          $location.path("/playerprofile/" + $scope.user.gamerTag);
        })
    }


//THIS BREAKS EVERYTHING
//    var userId = $scope.user.id;
//    if(userId !== 0) {
//      $http.get('api/getProfile?search_string=' + $scope.user.gamerTag, null)
//        .success(function (data, status) {
//          $scope.user = data;
//        })
//        .error(function (data, status) {
//          // Do nothing
//        });
//    }
  });
