'use strict';

describe('Controller: ExperimentsCtrl', function () {

  // load the controller's module
  beforeEach(module('helloworldApp'));

  var ExperimentsCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    ExperimentsCtrl = $controller('ExperimentsCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExperimentsCtrl.awesomeThings.length).toBe(3);
  });
});
