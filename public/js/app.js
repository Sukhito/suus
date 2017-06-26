var app = angular.module('suus',['ui.router','ui.bootstrap','focus-if']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('nav',{
            url: '/',
            templateUrl: 'js/navigation/index.html'
        })
        .state('items',{
            url: '/items',
            templateUrl: 'js/items/index.html',
            controller: 'ItemsCtrl'
        })
        .state('item',{
            url: '/items/:itemId',
            templateUrl: 'js/items/item/index.html',
            controller: 'ItemCtrl'
        })
        .state("otherwise",{
            url: '',
            templateUrl: 'js/navigation/index.html'
        });
    
    $locationProvider.hashPrefix('');
});