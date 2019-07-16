'use strict';

/**
 * @ngdoc directive
 * @name spafelizApp.directive:qxComponentObject
 * @description
 * # qxComponentObject
 */
angular.module('spafelizApp')
  .directive('qxComponentObject', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the qxComponentObject directive');
      }
    };
  });
