'use strict';

describe('Controller: PlyrmanageCtrl', function () {

  // load the controller's module
  beforeEach(module('testProjectsApp'));

  var PlyrmanageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlyrmanageCtrl = $controller('PlyrmanageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlyrmanageCtrl.awesomeThings.length).toBe(3);
  });
});
