'use strict';

describe('Controller: AssettabmenusCtrl', function () {

  // load the controller's module
  beforeEach(module('helloworldApp'));

  var AssettabmenusCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    AssettabmenusCtrl = $controller('AssettabmenusCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AssettabmenusCtrl.awesomeThings.length).toBe(3);
  });
});
