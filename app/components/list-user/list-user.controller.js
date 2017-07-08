(function () {
  'use strict';

  angular
    .module('gossip.rain')
    .controller('ListUserController', ListUserController);

  ListUserController.$inject = [];
  
  function ListUserController() {
    var vm = this;
    vm.users = [];

    vm.$onInit = onInit;
    vm.getAllUsers = getAllUsers;
    vm.send = send;

    function onInit() {
      getAllUsers();
    }
    
    function getAllUsers() {
          vm.users = [{'name':'sadkjks'}];
    }

    function send() {
      var name=document.getElementById('text').value;
      var nameJson={};
      nameJson.name=name;
      vm.users.push(nameJson);
    }
  }
})();