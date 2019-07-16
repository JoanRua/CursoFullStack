'use strict';

/**
 * @ngdoc directive
 * @name spafelizApp.directive:qxComponentObject2
 * @description
 * # qxComponentObject2
 */
angular.module('spafelizApp')
  .directive('qxComponentObject2', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the qxComponentObject2 directive');
      }
    };
  });
