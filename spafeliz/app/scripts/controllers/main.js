'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of the spafelizApp
 */

angular.module('spafelizApp').controller('mainCtrl', mainController);
  
mainController.$inject = ['spaServices'];

function mainController(spaServices) {

  var vm = this;
  vm.$onInit = onInit;
  vm.myNombre = 'Joan Alexander Rua Zuluaga';
  vm.loadSpaServices = loadSpaServices;

  function onInit(){
    vm.loadSpaServices();
  }

  function loadSpaServices(){
    vm.serviceList = spaServices.getAllServices();
    console.log(vm.serviceList);
  }

}
