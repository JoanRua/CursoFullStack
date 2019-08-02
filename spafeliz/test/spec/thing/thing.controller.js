'use strict';

describe('Controller: ThingCtrl', function () {

  // load the controller's module
  beforeEach(module('spafelizApp'));

  var ThingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThingCtrl = $controller('ThingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ThingCtrl.awesomeThings.length).toBe(3);
  });
});
