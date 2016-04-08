'use strict';

describe('Controller: TournamentprofileCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TournamentprofileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TournamentprofileCtrl = $controller('TournamentprofileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TournamentprofileCtrl.awesomeThings.length).toBe(3);
  });
});
