'use strict';

/**
 * @ngdoc function
 * @name helloworldApp.controller:HelloworldcontrollerCtrl
 * @description
 * # HelloworldcontrollerCtrl
 * Controller of the helloworldApp
 */
angular.module('helloworldApp')
  .controller('helloworldcontrollerCtrl', function () {
  	var _this = this;

  	_this.name = 'Sudip';

  	_this.printName = function() {
  		console.log(_this.name);
  	}
  });
