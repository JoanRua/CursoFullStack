(function() {
'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:ThingCtrl
 * @description
 * # ThingCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('ThingCtrl','ThingCtrl');
  

   /** @ngInject */
   function ThingCtrl($scope,ThingService){
    /**
    * Funcion de Inicio del Componente Sin la Generacion del HTML
    */
    this.$onInit = function () {
      console.log('OnInitEventThingCtrl');
    }; 
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  };
})();