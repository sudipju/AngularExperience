'use strict';

describe('Controller: AssetgroupsCtrl', function () {

  // load the controller's module
  beforeEach(module('helloworldApp'));

  var AssetgroupsCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    AssetgroupsCtrl = $controller('AssetgroupsCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AssetgroupsCtrl.awesomeThings.length).toBe(3);
  });
});
