'use strict';

/**
 * @ngdoc directive
 * @name spafelizApp.directive:qxComponentObject8
 * @description
 * # qxComponentObject8
 */
angular.module('spafelizApp')
  .directive('qxComponentObject8', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the qxComponentObject8 directive');
      }
    };
  });
