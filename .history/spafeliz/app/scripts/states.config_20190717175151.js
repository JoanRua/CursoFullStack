'use strict';

angular.module('spafelizApp').config(settings);

settings.$inject = ["$stateProvider","$urlRouterProvider"];

function settings($stateProvider,$urlRouterProvider){

var homeState = {
        abstract:true,
        name:'home',
        templateUrl:'views/home.html'
};

var mainState = {
    name:'home.main',
    url:'/',
    templateUrl:'views/main.html',
    controller: 'MainCtrl as main'
};
var aboutState = {
    name:'home.about',
    url:'/about',
    templateUrl:'views/about.html',
    controller: 'AboutCtrl as about'
};
var contactState = {
    name:'home.contact',
    url:'/contact',
    templateUrl:'qxcomponentobject43/qxcomponentobject43.html' /*,
    controller: 'MyrouteCtrl as myroute'*/
};
$stateProvider
        .state('home',homeState)
        .state('main',mainState)
        .state('about',aboutState)
        .state('contact',contactState)
        ;
};

$urlRouterProvider.otherwise("/")

/*
Leer Jhon Papa
Crear el state del about
*/ 