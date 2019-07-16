'use strict';

describe('Controller: Qxcomponentobject40Ctrl', function () {

  // load the controller's module
  beforeEach(module('spafelizApp'));

  var Qxcomponentobject40Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Qxcomponentobject40Ctrl = $controller('Qxcomponentobject40Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Qxcomponentobject40Ctrl.awesomeThings.length).toBe(3);
  });
});
