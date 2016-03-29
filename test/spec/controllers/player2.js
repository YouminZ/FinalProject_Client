'use strict';

describe('Controller: Player2Ctrl', function () {

  // load the controller's module
  beforeEach(module('testProjectsApp'));

  var Player2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Player2Ctrl = $controller('Player2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Player2Ctrl.awesomeThings.length).toBe(3);
  });
});
