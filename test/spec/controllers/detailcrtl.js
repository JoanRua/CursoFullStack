'use strict';

describe('Controller: DetailcrtlCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackApp'));

  var DetailcrtlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailcrtlCtrl = $controller('DetailcrtlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetailcrtlCtrl.awesomeThings.length).toBe(3);
  });
});
