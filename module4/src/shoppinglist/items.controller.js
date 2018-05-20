(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['$stateParams','MenuDataService' ];
function ItemsController($stateParams,MenuDataService) {
  var mainList = this;
  mainList.itemsInCategory = [];

mainList.$onInit = function (categoryShortName) {
  var itemId = $stateParams.itemId;

  MenuDataService.getItemsForCategory(itemId)
  .then(function (result) {
    mainList.itemsInCategory = result.menu_items;
  });

};

}
})();
