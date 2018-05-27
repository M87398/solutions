(function () {
"use strict";

angular.module('public')
.controller('RegisteredController', RegisteredController);

RegisteredController.$inject = ['regItem'];
function RegisteredController(regItem) {
  var $ctrl = this;
  $ctrl.registerd = regItem;
}


})();
