(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/shoppinglist/templates/categoriesList.template.html',
  bindings: {
    items: '<',
    shortName: '@'
  }
});


})();
