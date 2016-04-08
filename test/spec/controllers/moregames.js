'use strict';

describe('Controller: MoregamesCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MoregamesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoregamesCtrl = $controller('MoregamesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MoregamesCtrl.awesomeThings.length).toBe(3);
  });
});
