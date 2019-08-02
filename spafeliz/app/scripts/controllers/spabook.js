(function() {
'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:SpabookCtrl
 * @description
 * # SpabookCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('SpabookCtrl','SpabookCtrl');
  

   /** @ngInject */
   function SpabookCtrl($scope,SpabookService){
    /**
    * Funcion de Inicio del Componente Sin la Generacion del HTML
    */
    this.$onInit = function () {
      console.log('OnInitEventSpabookCtrl');
    }; 
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  };
})();