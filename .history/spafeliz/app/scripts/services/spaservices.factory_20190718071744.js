'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spaServices.factory
 * @description
 * # spaServices.factory
 * Factory in the spafelizApp.
 */
angular.module('spafelizApp')
  .factory('spaServices', spaServices);

spaServices.$inject = [];

function spaServices () {

    var dataServices = [
      { id: 1, name: 'Masaje sencillo', cost: '60,000', description: '30 min de una genial masaje. Sin final feliz',
         endHappy: false, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg' },
      { id: 2, name: 'Exfoliación', cost: '120,000', description: '30 min de una maravillosa Exfoliación',
         endHappy: false, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg' },
      { id: 3, name: 'Masaje full', cost: '220,000', description: '1 hora  de un maravilloso masaje. Con final feliz :D',
         endHappy: true, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg' },
     { id: 4, name: 'Masaje Reductor', cost: '150,000', description: 'Sesion 1 hora para el desprendimiento de grasa abdominal',
         endHappy: false, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg' },
      { id: 5, name: 'Masaje Levantador', cost: '260,000', description: '1 hora  de un maravilloso masaje, estimulante para el levantamiento de nalga y senos',
         endHappy: false, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg' }   
    ]; 

    var services = {
      getAllServices: getAllServicesMethod,
      getServiceById: getServiceById
    }

    return services;

    function getAllServicesMethod(){
      return dataServices;
    }

    function getServiceById(id){
      for(var  i = 0; i < dataServices.length; i++ ){
        if(id == dataServices[i].id) return dataServices[i];
      }
      return null;
    }

  }