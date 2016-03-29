'use strict';

describe('Controller: ManagepoolCtrl', function () {

  // load the controller's module
  beforeEach(module('testProjectsApp'));

  var ManagepoolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagepoolCtrl = $controller('ManagepoolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ManagepoolCtrl.awesomeThings.length).toBe(3);
  });
});
