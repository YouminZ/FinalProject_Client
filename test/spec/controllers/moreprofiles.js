'use strict';

describe('Controller: MoreprofilesCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MoreprofilesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoreprofilesCtrl = $controller('MoreprofilesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MoreprofilesCtrl.awesomeThings.length).toBe(3);
  });
});
