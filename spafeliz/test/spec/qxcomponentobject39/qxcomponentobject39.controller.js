'use strict';

describe('Controller: Qxcomponentobject39Ctrl', function () {

  // load the controller's module
  beforeEach(module('spafelizApp'));

  var Qxcomponentobject39Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Qxcomponentobject39Ctrl = $controller('Qxcomponentobject39Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Qxcomponentobject39Ctrl.awesomeThings.length).toBe(3);
  });
});
