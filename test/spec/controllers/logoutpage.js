'use strict';

describe('Controller: LogoutpageCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var LogoutpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogoutpageCtrl = $controller('LogoutpageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LogoutpageCtrl.awesomeThings.length).toBe(3);
  });
});
