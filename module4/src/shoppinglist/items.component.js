(function () {
'use strict';

angular.module('MenuApp')
.component('itemsitems', {
  templateUrl: 'src/shoppinglist/templates/items.template.html',
  bindings: {
    itemsInCategory: '<',

  }
});


})();
