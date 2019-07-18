'use strict';

angular.module('spafelizApp').config(settings);

settings.$inject = ["$stateProvider"];

function settings($stateProvider){
var mainState = {
    name:'main',
    url:'/',
    templateUrl:'views/main.html',
    controller: 'MainCtrl as main'
};
var aboutState = {
    name:'about',
    url:'/about',
    templateUrl:'views/about.html',
    controller: 'AboutCtrl as about'
};
var contactState = {
    name:'contact',
    url:'/contact',
    templateUrl:'qxcomponentobject43/qxcomponentobject43.html' /*,
    controller: 'MyrouteCtrl as myroute'*/
};
$stateProvider
        .state('home',mainState)
        .state('about',aboutState)
        .state('contact',contactState)
        ;
};


/*
Leer Jhon Papa
Crear el state del about
*/ 