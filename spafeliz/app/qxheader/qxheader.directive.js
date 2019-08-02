'use strict';

/**
 * @ngdoc directive
 * @name spafelizApp.directive:qxComponentObject43
 * @description
 * # qxComponentObject43
 */
angular.module('spafelizApp')
  .directive('qxHeader',qxHeader);
  
  /** @ngInject */
  function qxHeader() {
    var jqWindow = $(window);
    return {
     
      templateUrl:'qxheader/qxheader.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the qxheader directive');

        
    /**
    * Funcion de Inicio del Componente despues de la Generacion del HTML
    */
        element.ready(function(){
          this.$onInit = function () {
            console.log('OnInitqxheader directive');
            $('#Objeto').on('click', function ($evt) {
              return _onqxComponentObject43ElementClick($evt) ;
            } );
          }; 
  
          return this.$onInit();
        }
        );


        
        function _onqxComponentObject43ElementClick($evt) {
          console.log('onqxheaderElementClick');
      }
      }

  }
}