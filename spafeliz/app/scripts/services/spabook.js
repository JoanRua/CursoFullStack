(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name spafelizApp.spaBook
   * @description
   * # spaBook
   * Service in the spafelizApp.
   */
  angular.module('spafelizApp').service('spaBook', spaBook);

  spaBook.$inject = ['$http', '$q', 'httpConfig'];

  function spaBook($http, $q, httpConfig) {
    let services = {
      getAll: getAll,
      getByPk: getByPk,
      reservar: reservar
    }
    return services;

    function getAll() {
      var defered = $q.defer();
      var promise = defered.promise;
      const url = httpConfig.url + httpConfig.reservas.all;
      $http.get(url)
        .then(function (data) {
          defered.resolve(data)
        })
        .catch(function (error) {
          defered.reject(error);
        });
      return promise;
    }

    function getByPk(id) {
      var defered = $q.defer();
      var promise = defered.promise;
      const url = httpConfig.url + httpConfig.reservas.all + '/' + id;
      $http.get(url)
        .then(function (data) {
          defered.resolve(data)
        })
        .catch(function (error) {
          defered.reject(error);
        });
      return promise;
    }

    function reservar(formulario) {
      var defered = $q.defer();
      var promise = defered.promise;
      const url = httpConfig.url + httpConfig.reservas.all + '/';
      $http.post(url, formulario)
        .then(function (data) {
          defered.resolve(data)
        })
        .catch(function (error) {
          defered.reject(error);
        });
      return promise;
    }

  }
})();