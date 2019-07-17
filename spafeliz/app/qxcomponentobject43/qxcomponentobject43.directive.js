'use strict';

/**
 * @ngdoc directive
 * @name spafelizApp.directive:qxComponentObject43
 * @description
 * # qxComponentObject43
 */
angular.module('spafelizApp')
  .directive('qxComponentObject43',qxComponentObject43);
  
  /** @ngInject */
  function qxComponentObject43() {
    var jqWindow = $(window);
    return {
      template: '<div></div>',
      templateUrl:'',
      restrict: 'E',
      controller: qxComponentObject43Ctrl,
      link: function postLink(scope, element, attrs) {
        element.text('this is the qxComponentObject43 directive');

        this.$onInit = function () {
          console.log('OnInitEventQxcomponentobject43 directive');
          $('#Objeto').on('click', function ($evt) {
            return _onqxComponentObject43ElementClick($evt) ;
          } );
        }; 

    /**
    * Funcion de Inicio del Componente despues de la Generacion del HTML
    */
        element.ready(function(){
          return $onInit();
        });


        jqWindow.on('click', _onWindowClick);

        scope.$on('$destroy', function() {
          jqWindow.off('click', _onWindowClick);
        });

        function _onWindowClick($evt) {};
        
        function _onqxComponentObject43ElementClick($evt) {
          console.log('onqxComponentObject43ElementClick');
      };
      }

  }
}