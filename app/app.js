var app = angular.module('customerApp', ['ngRoute']);

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
        .otherwise({
            redirectTo: '/'
        })
})
