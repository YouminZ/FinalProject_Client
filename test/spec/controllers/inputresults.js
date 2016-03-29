'use strict';

describe('Controller: InputresultsCtrl', function () {

  // load the controller's module
  beforeEach(module('testProjectsApp'));

  var InputresultsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InputresultsCtrl = $controller('InputresultsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InputresultsCtrl.awesomeThings.length).toBe(3);
  });
});
