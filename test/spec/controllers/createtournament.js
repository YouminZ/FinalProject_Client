'use strict';

describe('Controller: CreatetournamentCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CreatetournamentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatetournamentCtrl = $controller('CreatetournamentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreatetournamentCtrl.awesomeThings.length).toBe(3);
  });
});
