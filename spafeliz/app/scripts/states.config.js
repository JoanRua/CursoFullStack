'use strict';

angular.module('spafelizApp').config(settings);

settings.$inject = ["$stateProvider","$urlRouterProvider","$locationProvider"];

function settings($stateProvider,$urlRouterProvider,$locationProvider){

var homeState = {
        abstract:true,
        name:'home',
        templateUrl:'views/home.html'
};

var mainState = {
    name:'home.main',
    url:'/',
    templateUrl:'views/main.html',
    controller: 'mainCtrl as main'
};
var aboutState = {
    name:'home.about',
    url:'/about',
    templateUrl:'views/about.html',
    controller: 'AboutCtrl as about'
};
var servivesState = {
        name:'home.services',
        url:'/servicios',
        templateUrl:'views/services.html',
        controller: 'ServicesCtrl as service'
    };
var contactState = {
    name:'home.contact',
    url:'/contact',
    templateUrl:'qxcomponentobject43/qxcomponentobject43.html' /*,
    controller: 'MyrouteCtrl as myroute'*/
};

var detailState = {
        name:'home.detail',
        url:'/detail',
        templateUrl:'views/detail.html',
        controller: 'DetailCtrl as Detail'
    }

    var detailEspecificoState = {
        name:'detailpublico',
        url:'/detailpublico/{id}',
        templateUrl:'views/detail.html',
        controller: 'DetailCtrl as Detail'
    }


var bookState = {
        name:'home.book',
        url:'/book',
        templateUrl:'views/book.html',
        controller: 'BookCtrl as book'
    };

    var bookEspecificoState = {
        name:'bookpublico',
        url:'/bookpublico',
        templateUrl:'views/book.html',
        controller: 'BookCtrl as book'
    };


$stateProvider
        .state('home',homeState)
        .state('main',mainState)
        .state('about',aboutState)
        .state('contact',contactState)
        .state('service',servivesState)
        .state('detail',detailState)
        .state('detailpublico',detailEspecificoState)
        .state('book',bookState)
        .state('bookpublico',bookEspecificoState);
        

        $urlRouterProvider.when('', '/');
        $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
}

/*
Leer Jhon Papa
Crear el state del about
*/ 