'use strict';

describe('Directive: qxComponentObject38', function () {

  // load the directive's module
  beforeEach(module('spafelizApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<qx-component-object38></qx-component-object38>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the qxComponentObject38 directive');
  }));
});
