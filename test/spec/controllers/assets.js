'use strict';

describe('Controller: AssetsCtrl', function () {

  // load the controller's module
  beforeEach(module('helloworldApp'));

  var AssetsCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    AssetsCtrl = $controller('AssetsCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AssetsCtrl.awesomeThings.length).toBe(3);
  });
});
