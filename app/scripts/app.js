'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactUsCtrl'
      })
      .when('/faqs', {
        templateUrl: 'views/faqs.html',
        controller: 'FaqsCtrl',
        controllerAs: 'faqs'
      })
      .when('/player2', {
        templateUrl: 'views/player2.html',
        controller: 'Player2Ctrl',
        controllerAs: 'player2'
      })
      .when('/playerprofile', {
        templateUrl: 'views/playerprofile.html',
        controller: 'PlayerProfileCtrl',
        controllerAs: 'playerprofile'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/registersuccess', {
        templateUrl: 'views/registersuccess.html',
        controller: 'RegisterSuccessCtrl'
      })
      .when('/playersearch', {
        templateUrl: 'views/playersearch.html',
        controller: 'PlayersearchCtrl'
      })
      .when('/searchtournaments', {
        templateUrl: 'views/searchtournaments.html',
        controller: 'SearchtournamentsCtrl'
      })
      .when('/playermanage', {
        templateUrl: 'views/playermanage.html',
        controller: 'PlayerManageCtrl'
      })
      .when('/optpool', {
        templateUrl: 'views/optpool.html',
        controller: 'OptPoolCtrl'
      })
      .when('/managepool', {
        templateUrl: 'views/managepool.html',
        controller: 'ManagePoolCtrl'
      })
      .when('/inputresults', {
        templateUrl: 'views/inputresults.html',
        controller: 'InputResultsCtrl'
      })

      .when('/mainlogin', {
        templateUrl: 'views/mainlogin.html',
        controller: 'MainLoginCtrl'
      })
      .when('/editprofile', {
        templateUrl: 'views/editprofile.html',
        controller: 'EditprofileCtrl'

      .when('/tournamentprofile', {
        templateUrl: 'views/tournamentprofile.html',
        controller: 'TournamentprofileCtrl'
      })
      .when('/moregames', {
        templateUrl: 'views/moregames.html',
        controller: 'MoregamesCtrl'

      })
      .otherwise({
        redirectTo: '/'
      });

  });
