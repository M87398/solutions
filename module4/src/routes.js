(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/shoppinglist/templates/categories.template.html',
    controller: 'CategoriesController as categoriesList',
  })

  .state('items', {
    url: '/items?itemId',
    templateUrl: 'src/shoppinglist/templates/items.template.html',
    controller: 'ItemsController as itemsList',
    params:{
      itemId: null
    }
  });
}

})();
