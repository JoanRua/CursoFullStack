'use strict';

describe('Filter: currencyFormatFilter', function () {

  // load the filter's module
  beforeEach(module('spafelizApp'));

  // initialize a new instance of the filter before each test
  var currencyFormatFilter;
  beforeEach(inject(function ($filter) {
    currencyFormatFilter = $filter('currencyFormatFilter');
  }));

  it('should return the input prefixed with "currencyFormatFilter filter:"', function () {
    var text = 'angularjs';
    expect(currencyFormatFilter(text)).toBe('currencyFormatFilter filter: ' + text);
  });

});
