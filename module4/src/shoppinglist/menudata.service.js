(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q','$http']
function MenuDataService($q, $http) {
  var service = this;

  // List of shopping items
  var items = [];
service.getItems = function () {
  return items;
}
  service.getAllCategories = function () {
    return $http.get("https://davids-restaurant.herokuapp.com/categories.json")
    .then(function (response) {
      items=response.data;
      return response.data;
    });
  };

  service.getItemsForCategory = function (itemId) {
    var item=items[itemId];

    return $http.get(" https://davids-restaurant.herokuapp.com/menu_items.json?category="+ item["short_name"])
    .then(function (response) {
      return response.data;
    });
  };

}

})();
