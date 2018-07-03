app.controller('customerController', ['$scope', 'customersService', 'appSettings', function (scope, customersService, appSettings) {
    scope.sortBy = 'name'
    scope.reverse = false
    scope.customers = []
    scope.appSettings = appSettings

    function init() {
        customersService.getCustomers()
            .then(function(customers){
                scope.customers = customers.data
            })
            .catch(function(data, status, headers, config){
                console.log(data, status, headers, config)
            })
    }
    init()

    scope.doSort = function (propName) {
        scope.sortBy = propName
        scope.reverse = !scope.reverse
    }
}])
