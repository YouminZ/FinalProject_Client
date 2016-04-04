'use strict';

describe('Controller: SearchtournamentsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var SearchtournamentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchtournamentsCtrl = $controller('SearchtournamentsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchtournamentsCtrl.awesomeThings.length).toBe(3);
  });
});
