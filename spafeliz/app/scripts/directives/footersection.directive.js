(function() {
'use strict';

/**
 * @ngdoc directive
 * @name spafelizApp.directive:footerSection.directive
 * @description
 * # footerSection.directive
 */
angular.module('spafelizApp')
  .directive('footerSection',footerSectionDirective);
  
  /** @ngInject */
  function footerSectionDirective() {
   
    var directive = {
     // template: '<div>{{team}}</div>',
      templateUrl: './views/partial.footer.html',
      restrict: 'EA',
     // controller: footerSectionCtrl,
      link: footerSectionLink
    };

      return directive;

      function footerSectionLink(scope, element, attrs) {
        scope.team = attrs.author;
        var jqWindow = $(window);
        //element.text('this is the footerSection.directive directive');
 
    /**
    * Funcion de Inicio del Componente despues de la Generacion del HTML
    */
        element.ready(function(){

          this.$onInit = function () {
            console.log('OnInitEventFootersectionDirective directive');
            $('#Objeto').on('click', function ($evt) {
              return _onfooterSectiondirectiveElementClick($evt) ;
            } );
          }; 

          
           this.$onInit();
        });


        jqWindow.on('click', _onWindowClick);

        scope.$on('$destroy', function() {
          jqWindow.off('click', _onWindowClick);
        });

        function _onWindowClick($evt) {};
        
        function _onfooterSectiondirectiveElementClick($evt) {
          console.log('onfooterSection.directiveElementClick');
      };
      };}
})();