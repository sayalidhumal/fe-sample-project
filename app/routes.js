'use strict';

angular.module('CartLy').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('root', {
            url: '/',
            views:{
                '':{
                    templateUrl: 'controllers/layout/layout.html',
                    controller: 'LayoutController',
                    controllerAs:'vm'
                },
                'content@root':{
                    templateUrl: 'controllers/shop/shop.html',
                    controller: 'HomeController',
                    controllerAs:'vm'
                }
            }
        })
});