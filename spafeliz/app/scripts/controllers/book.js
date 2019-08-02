'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('BookCtrl', bookCtrl);

bookCtrl.$inject = ['spaServicesHttp', 'spaBook', '$state'];

function bookCtrl(spaServicesHttp, spaBook, $state) {
  var vm = this;
  vm.form = {};
  vm.submitBook = submitBook;
  vm.showSuccessAlert = false;
  vm.showErrorAlert = false;
  vm.switchBool = switchBool;
  vm.loadSpaServicesHttp = loadSpaServicesHttp;
  vm.formatDate = formatDate;
  vm.formatHour = formatHour;
  vm.$onInit = init;

  function init() {
    vm.loadSpaServicesHttp();
    console.log('init book controller', localStorage.getItem("idServicio"));
  }

  function submitBook() {
    console.log('formulario2: ', vm.form);
    spaBook.reservar({
      'nombre': vm.form.name,
      'fecha': vm.formatDate(vm.form.date),
      'hora': vm.formatHour(vm.form.time),
      'email': vm.form.email,
      'idservicio': vm.form.service_selected
    })
      .then(function (result) {
        vm.serviceList = result.data;
        vm.showSuccessAlert = true;
        vm.message = 'Gracias por hacer tu reserva';
        vm.form = {};
        vm.loadSpaServicesHttp = loadSpaServicesHttp;
      })
      .catch(function (err) {
        vm.showErrorAlert = true;
        vm.message = 'Favor validar la informacion, la reserva no se pudo realizar.';
        console.log(err);
      });
  }

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [ year, month, day ].join('-');
  }
  
  function formatHour(date) {
    var d = new Date(date),
      hora = '' + (d.getHours()),
      minuto = '' + d.getMinutes(),
      segundo = '' + d.getSeconds();

    if (hora.length < 2) hora = '0' + hora;
    if (minuto.length < 2) minuto = '0' + minuto;
    if (segundo.length < 2) segundo = '0' + segundo;

    return [hora, minuto, segundo].join(':');
  }

  function loadSpaServicesHttp() {
    spaServicesHttp.getAll()
      .then(function (result) {
        vm.serviceList = result.data;
        vm.form.service_selected = Number(localStorage.getItem("idServicio"));
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function switchBool(estado) {
    vm.showSuccessAlert = !estado;
    vm.showErrorAlert = !estado;
  }


}