'use strict';

/**
 * @ngdoc overview
 * @name testProjectsApp
 * @description
 * # testProjectsApp
 *
 * Main module of the application.
 */
angular
  .module('testProjectsApp', [
    'ngResource',
    'ngRoute'
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
      .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactUsCtrl',
        controllerAs: 'contactus'
      })
      .when('/faqs', {
        templateUrl: 'views/faqs.html',
        controller: 'FaqsCtrl',
        controllerAs: 'faqs'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'registration'
      })
      .when('/playerprofile', {
        templateUrl: 'views/playerprofile.html',
        controller: 'PlayerProfileCtrl',
        controllerAs: 'playerprofile'
      })
      .when('/player2', {
        templateUrl: 'views/player2.html',
        controller: 'Player2Ctrl',
        controllerAs: 'player2'
      })
      .when('/playermanage', {
        templateUrl: 'views/playermanage.html',
        controller: 'PlayerManageCtrl',
        controllerAs: 'playermanage'
      })
      .when('/optpool', {
        templateUrl: 'views/optpool.html',
        controller: 'OptPoolCtrl',
        controllerAs: 'optpool'
      })
      .when('/managepool', {
        templateUrl: 'views/managepool.html',
        controller: 'ManagePoolCtrl',
        controllerAs: 'managepool'
      })
      .when('/inputresults', {
        templateUrl: 'views/inputresults.html',
        controller: 'InputResultsCtrl',
        controllerAs: 'inputresults'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
