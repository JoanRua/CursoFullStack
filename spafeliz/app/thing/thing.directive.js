(function() {
'use strict';

/**
 * @ngdoc directive
 * @name spafelizApp.directive:thing
 * @description
 * # thing
 */
angular.module('spafelizApp')
  .directive('thing',thing);
  
  /** @ngInject */
  function thing() {
   
    var directive = {
      template: '<div></div>',
      templateUrl:'',
      restrict: 'EA',
      controller: thingCtrl,
      link: thinglink };

      return directive;

      function thingLink(scope, element, attrs) {
        var jqWindow = $(window);
        element.text('this is the thing directive');
        this.$onInit = function () {
          console.log('OnInitEventThing directive');
          $('#Objeto').on('click', function ($evt) {
            return _onthingElementClick($evt) ;
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
        
        function _onthingElementClick($evt) {
          console.log('onthingElementClick');
      };
      };
})();