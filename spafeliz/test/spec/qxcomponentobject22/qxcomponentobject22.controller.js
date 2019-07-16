'use strict';

describe('Controller: Qxcomponentobject22Ctrl', function () {

  // load the controller's module
  beforeEach(module('spafelizApp'));

  var Qxcomponentobject22Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Qxcomponentobject22Ctrl = $controller('Qxcomponentobject22Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Qxcomponentobject22Ctrl.awesomeThings.length).toBe(3);
  });
});
