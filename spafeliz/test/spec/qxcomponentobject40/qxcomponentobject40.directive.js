'use strict';

describe('Directive: qxComponentObject40', function () {

  // load the directive's module
  beforeEach(module('spafelizApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<qx-component-object40></qx-component-object40>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the qxComponentObject40 directive');
  }));
});
