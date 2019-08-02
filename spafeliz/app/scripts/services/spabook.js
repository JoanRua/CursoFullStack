(function() {
'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spabook
 * @description
 * # spabook
 * Service in the spafelizApp.
 */
angular.module('spafelizApp')
  .service('spabookService', spabookServiceProvider);

   /** @ngInject */
   function spabookServiceProvider () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  };
})();