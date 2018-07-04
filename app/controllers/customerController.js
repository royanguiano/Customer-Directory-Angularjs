app.controller('customerController', ['$scope', 'customersService', 'appSettings', '$window', function (scope, customersService, appSettings, window) {
    scope.sortBy = 'name'
    scope.reverse = false
    scope.customers = []
    scope.appSettings = appSettings

    function init() {
        customersService.getCustomers()
            .then(function (customers) {
                scope.customers = customers.data
            })
            .catch(function (data, status, headers, config) {
                console.log(data, status, headers, config)
            })
    }
    init()

    scope.doSort = function (propName) {
        scope.sortBy = propName
        scope.reverse = !scope.reverse
    }

    scope.deleteCustomer = function (customerId) {
        customersService.deleteCustomer(customerId)
            .then(function (status) {
                console.log('servies: ', status)
                if (status) {
                    scope.customers.map((customer, i) => {
                        if (customer.id === customerId) {
                            scope.customers.splice(i, 1)
                            return
                        }
                    })
                } else {
                    window.alert('unable to delete customer')
                }
            })
            .catch(function (data, status, headers, config) {
                console.log(data, status)
            })
    }
}])