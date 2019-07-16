'use strict';

describe('Controller: Qxcomponentobject43Ctrl', function () {

  // load the controller's module
  beforeEach(module('spafelizApp'));

  var Qxcomponentobject43Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Qxcomponentobject43Ctrl = $controller('Qxcomponentobject43Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Qxcomponentobject43Ctrl.awesomeThings.length).toBe(3);
  });
});
