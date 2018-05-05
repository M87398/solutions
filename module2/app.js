(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  var shoppingList = ShoppingListCheckOffService;

  toBuy.items = shoppingList.getToBuyItems();

  toBuy.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  var shoppingList = ShoppingListCheckOffService;

  bought.items = shoppingList.getBoughtItems();

};
function ShoppingListCheckOffService() {
  var service = this;

  var toBuy = [];
  var bought = [];

  service.removeItem = function (itemIdex) {
    bought.push(toBuy[itemIdex]);
    toBuy.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return toBuy;
  };

  service.getBoughtItems = function () {
    return bought;
  };

  var addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuy.push(item);
  };

  var initItems=function(){
    addItem("apples",6);
    addItem("eggs",3);
    addItem("bananas",13);
    addItem("flowers",8);
    addItem("hot dogs",10);
    addItem("chips",5);
  };
  initItems();
}
})();
