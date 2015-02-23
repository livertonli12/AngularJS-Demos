(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngAnimate']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'app/areas/home/views/index.html'
            })
            .otherwise({
                controller: 'HomeCtrl as vm',
                templateUrl: '404.html',                
            });
    });
})();