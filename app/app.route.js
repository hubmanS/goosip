(function () {
  'use strict';

  angular
    .module('gossip.rain')
    .config(function ($locationProvider, $routeProvider) {

      $routeProvider
        .when('/app', {
          templateUrl: 'components/list-user/list-user.html'
        })
    });
})();