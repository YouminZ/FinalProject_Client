'use strict';

describe('Controller: FaqsCtrl', function () {

  // load the controller's module
  beforeEach(module('testProjectsApp'));

  var FaqsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FaqsCtrl = $controller('FaqsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FaqsCtrl.awesomeThings.length).toBe(3);
  });
});
