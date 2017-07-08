(function () {
  'use strict';

  angular
    .module('gossip.rain')
    .component('itemUser', {
      controller: 'ItemUserController',
      controllerAs: 'vm',
      bindings: {
        user: '<'
      },
      templateUrl: 'item-user.html'
    });
})();