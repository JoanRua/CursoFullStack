'use strict';

/**
 * @ngdoc overview
 * @name spafelizApp
 * @description
 * # spafelizApp
 *
 * Main module of the application.
 */
angular
  .module('spafelizApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'oc.lazyLoad',
  ]).config(ocLazyLoadConfig);

   /** @ngInject */
  function ocLazyLoadConfig($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      modules: [{
        name: 'spafelizapp.ejemplo',
        files: ['qxcomponentobject43/qxcomponentobject43.controller.js','qxcomponentobject43/qxcomponentobject43.directive.js','qxcomponentobject43/qxcomponentobject43.service.js']
      }]
    });
  };
  /*
  .config(
    /*function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'myroute'
      })
      .otherwise({
        redirectTo: '/'
      }); 
    }*/
