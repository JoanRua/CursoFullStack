'use strict';

describe('Service: thing', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var thing;
  beforeEach(inject(function (_thing_) {
    thing = _thing_;
  }));

  it('should do something', function () {
    expect(!!thing).toBe(true);
  });

});
