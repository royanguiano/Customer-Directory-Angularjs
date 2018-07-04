var app = angular.module('customerApp', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/pages/home.html',
            controller: 'customerController'
        })
        .when('/records', {
            templateUrl: 'app/pages/records.html',
            controller: 'recordController'
        })
        .when('/records/:customerId', {
            templateUrl: 'app/pages/records.html',
            controller: 'recordController'
        })
        .when('/orders', {
            templateUrl: 'app/pages/orders.html',
            controller: 'ordersController'
        })
        .otherwise({
            redirectTo: '/'
        })
})