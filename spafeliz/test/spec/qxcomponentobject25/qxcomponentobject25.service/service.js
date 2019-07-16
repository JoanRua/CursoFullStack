'use strict';

describe('Service: qxComponentObject25', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var qxComponentObject25;
  beforeEach(inject(function (_qxComponentObject25_) {
    qxComponentObject25 = _qxComponentObject25_;
  }));

  it('should do something', function () {
    expect(!!qxComponentObject25).toBe(true);
  });

});
