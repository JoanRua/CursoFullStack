'use strict';

describe('Controller: Qxcomponentobject38Ctrl', function () {

  // load the controller's module
  beforeEach(module('spafelizApp'));

  var Qxcomponentobject38Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Qxcomponentobject38Ctrl = $controller('Qxcomponentobject38Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Qxcomponentobject38Ctrl.awesomeThings.length).toBe(3);
  });
});
