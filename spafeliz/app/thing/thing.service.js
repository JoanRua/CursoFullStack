(function() {
'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.thing
 * @description
 * # thing
 * Service in the spafelizApp.
 */
angular.module('spafelizApp')
  .service('thingService', thingServiceProvider);

   /** @ngInject */
   function thingServiceProvider () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  };
})();