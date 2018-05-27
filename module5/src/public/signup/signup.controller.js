(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var reg = this;
  reg.wrongMenuNumer=false;
  reg.saved=false;
  // $ctrl.menuCategories = menuCategories;

  reg.submit = function () {
    MenuService.getSingleItem(reg.user.menuNumber)
    .then(
      function (response){
        var regObject={
          firstname: reg.user.firstname,
          lastname: reg.user.lastname,
          email: reg.user.email,
          phone: reg.user.phone,
          response: response
        };
        MenuService.setRegObject(regObject);
        reg.wrongMenuNumer=false;
        reg.saved=true;
      },
      function(error){
        reg.wrongMenuNumer=true;
        reg.saved=false;
      }
    );
    reg.completed = true;
  };

}


})();
