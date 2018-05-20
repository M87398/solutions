(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
  var mainList = this;
  mainList.items = [];

mainList.$onInit = function () {
  MenuDataService.getAllCategories()
  .then(function (result) {
    mainList.items = result;
  });
};
}
})();
