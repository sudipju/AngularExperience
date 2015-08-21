'use strict';

describe('Controller: HelloworldcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('helloworldApp'));

  var HelloworldcontrollerCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    HelloworldcontrollerCtrl = $controller('HelloworldcontrollerCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HelloworldcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
