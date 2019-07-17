'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:Qxcomponentobject43Ctrl
 * @description
 * # Qxcomponentobject43Ctrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('qxcomponentobject43Ctrl',qxcomponentobject43Ctrl);
  

   /** @ngInject */
   function qxcomponentobject43Ctrl($scope,qxComponentObject43Service){
    /**
    * Funcion de Inicio del Componente Sin la Generacion del HTML
    */
    this.$onInit = function () {
      console.log('OnInitEventQxcomponentobject43Ctrl');
    }; 
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  };
