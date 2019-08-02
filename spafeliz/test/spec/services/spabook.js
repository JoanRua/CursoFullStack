'use strict';

describe('Service: spabook', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var spabook;
  beforeEach(inject(function (_spabook_) {
    spabook = _spabook_;
  }));

  it('should do something', function () {
    expect(!!spabook).toBe(true);
  });

});
