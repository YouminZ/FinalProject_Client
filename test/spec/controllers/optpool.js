'use strict';

describe('Controller: OptpoolCtrl', function () {

  // load the controller's module
  beforeEach(module('testProjectsApp'));

  var OptpoolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OptpoolCtrl = $controller('OptpoolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OptpoolCtrl.awesomeThings.length).toBe(3);
  });
});
