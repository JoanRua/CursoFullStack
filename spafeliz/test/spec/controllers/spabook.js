'use strict';

describe('Controller: SpabookCtrl', function () {

  // load the controller's module
  beforeEach(module('spafelizApp'));

  var SpabookCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpabookCtrl = $controller('SpabookCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpabookCtrl.awesomeThings.length).toBe(3);
  });
});
