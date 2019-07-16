'use strict';

describe('Service: qxComponentObject23', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var qxComponentObject23;
  beforeEach(inject(function (_qxComponentObject23_) {
    qxComponentObject23 = _qxComponentObject23_;
  }));

  it('should do something', function () {
    expect(!!qxComponentObject23).toBe(true);
  });

});
