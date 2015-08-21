'use strict';

describe('Filter: assets', function () {

  // load the filter's module
  beforeEach(module('helloworldApp'));

  // initialize a new instance of the filter before each test
  var assets;
  beforeEach(inject(function ($filter) {
    assets = $filter('assets');
  }));

  it('should return the input prefixed with "assets filter:"', function () {
    var text = 'angularjs';
    expect(assets(text)).toBe('assets filter: ' + text);
  });

});
