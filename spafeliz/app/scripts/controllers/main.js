'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of the spafelizApp
 */

angular.module('spafelizApp').controller('mainCtrl', mainController);
  
mainController.$inject = ['spaServices', 'spaServicesHttp'];

function mainController(spaServices, spaServicesHttp) {

  var vm = this;
  vm.$onInit = onInit;
  vm.myNombre = 'Joan Alexander Rua Zuluaga';
  vm.loadSpaServices = loadSpaServices;
  vm.loadSpaServicesHttp = loadSpaServicesHttp;
  
  function onInit(){
    vm.loadSpaServices();
    vm.loadSpaServicesHttp();
  }

  function loadSpaServices(){
    vm.serviceList = spaServices.getAllServices();
    console.log(vm.serviceList);
  }


  function loadSpaServicesHttp() {
    console.log('inicio');
    spaServicesHttp.getAll()
      .then(function (result) {
        console.log('resultado ' + result.data)
        vm.serviceList = result.data;
      })
      .catch(function (err) {
        console.log(err);
      });
    console.log('termino');
  }


}
