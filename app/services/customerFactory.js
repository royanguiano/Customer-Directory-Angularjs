app.factory('customersFactory', function () {
    
    var factory = {}
    factory.getCustomers = function () {
        return customers
    }

    factory.getCustomer = function (customerId) {
        for (let i = 0; i < customers.length; i++) {
            if (customers[i].id == parseInt(customerId)) {
                console.log(customerId, customers[i])
                return customers[i];

            }
        }
        return {}
    }

    return factory
})
