(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['$stateParams','MenuDataService' ];
function ItemsController($stateParams,MenuDataService) {
  var mainList = this;
  mainList.itemsInCategory = [];

  mainList.itemsInCategory.push({id: "id_by_MB", name: "Maciej" });
  mainList.itemsInCategory.push({id: "id2", name: "SEcond" });

mainList.$onInit = function (categoryShortName) {
  var itemId = $stateParams.itemId;
  // console.log("itemId first: ", itemId);
  MenuDataService.getItemsForCategory(itemId)
  .then(function (result) {
    console.log("itemId: ", itemId);
    mainList.itemsInCategory = result.menu_items;
    var item0=mainList.itemsInCategory[0];
    console.log("item0: ", item0["name"]);
  });
};

}
})();
