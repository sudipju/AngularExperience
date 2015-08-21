'use strict';

/**
 * @ngdoc function
 * @name helloworldApp.controller:AssetsCtrl
 * @description
 * # AssetsCtrl
 * Controller of the helloworldApp
 */
angular.module('helloworldApp')
  .controller('AssetsCtrl', function () {
    var self = this;

    self.assets = [
        {
        	dateAdded: new Date(),
        	assetId: 410490910,
        	assetName: 'Room 303',
        	description: 'Superior room',
        	groups: 'Third floor, Superior'
        },
        {
        	dateAdded: new Date(),
        	assetId: 123737832,
        	assetName: 'Room 1620',
        	description: 'Suite',
        	groups: '16th floor, Suite'
        }
    ];

    self.sort = {};
    var attributeMap = {};
    self.orderBy = function (attribute){
        if(!attributeMap[attribute]){
            attributeMap = {};
        }
        self.sort.reverse = attributeMap[attribute];
        self.sort.by = attribute;
        attributeMap[attribute] = !attributeMap[attribute];                
    };

  });
