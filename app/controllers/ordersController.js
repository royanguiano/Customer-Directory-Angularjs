app.controller('ordersController', ['$scope', 'customersService',
    function (scope, customersService) {
        scope.orders = null
        scope.ordersTotal = 0.0
        scope.totalType;

        function init() {
            customersService.getOrders()
                .then(function (orders) {
                    scope.orders = orders.data
                    getOrdersTotal()
                })
                .catch(function (data, status) {
                    console.log('error from customerService.js: ', data, status)
                })
        }

        function getOrdersTotal() {
            var total = 0
            for (let i = 0; i < scope.orders.length; i++) {
                total += scope.orders[i].total
            }
            scope.ordersTotal = total
            scope.totalType = (scope.ordersTotal > 100) ? 'success' : 'danger'
        }
        init()
    }
])