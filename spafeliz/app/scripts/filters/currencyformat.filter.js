
(function() {
'use strict';

/**
 * @ngdoc filter
 * @name spafelizApp.filter:currencyFormatFilter
 * @function
 * @description
 * # currencyFormatFilter
 * Filter in the spafelizApp.
 */
angular.module('spafelizApp')
  .filter('currencyFormat', currencyFormatFilter );
  
    /** @ngInject */
  function currencyFormatFilter() {
    return function (value) {
      return 'COP ' + value.toLocaleString();
    };
  }
})();