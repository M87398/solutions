(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      empty: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.empty=false;
  menu.found = [];

menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex, 1);
     menu.setEmpty();
};
menu.search = function(txtToSearch){

  var promise = MenuSearchService.getMatchedMenuItems(menu.txtToSearch);
    promise.then(function (response){
       menu.found=response.data.found;
       menu.setEmpty();
    })
    .catch(function error(){
      console.log(error);
    })
}
menu.setEmpty= function(){
  if(menu.found.length ===0){
    menu.empty=true;
  }else{
    menu.empty=false;
  }
}
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var found =[];
  service.getMatchedMenuItems = function (txtToSearch) {
    var promise = service.getFromServer(txtToSearch);

    promise.then(function (response) {
      found =[];
      for(var j=0;j< response.data.menu_items.length;j++){
        var item=response.data.menu_items[j];
        if (item.description.toLowerCase().indexOf(txtToSearch) !== -1){
          found.push(item);
        }
      }
      response.data.found=found;
      // menu.found=response.data.menu_items;
    })
    .catch(function (error) {
      console.log(error);
    });
    return promise;
  };
  service.getFromServer = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    });
    return response;
  };

}

})();
