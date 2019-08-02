'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:Detail
 * @description
 * # Detail
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('DetailCtrl', detailCtrl);

detailCtrl.$inject = ['$state', 'spaServicesHttp'];

function detailCtrl($state, spaServicesHttp) {
  var vm = this;
  vm.$onInit = init;
  vm.loadSpaServicesHttp = loadSpaServicesHttp;

  function init() {
    vm.loadSpaServicesHttp();
    
  }
  
  function loadSpaServicesHttp() {
  
    var idServicio = 0;

    debugger;

    idServicio = $state.params.id;

    if (typeof idServicio == 'undefined') {
      idServicio = 1;
    }

    localStorage.setItem('idServicio', idServicio);
    spaServicesHttp.getByPk(idServicio)
      .then(function (result) {
        debugger;
        console.log('resultado ' + result.data)
      
        vm.serviceDetail = result.data;
      })
      .catch(function (err) {
        console.log(err);
      });

  }

  
}