app.controller('ordersController', ['$scope', 'customerService',
    function (scope, customerService) {
        scope.orders = null
        scope.ordersTotal = 0.0
        scope.totalType;

        function init() {
            customerService.getOrders().then(function (orders) {
                    scope.orders = orders
                    getOrdersTotal()
                })
                .catch(function (data, status) {
                    console.log('error: ', data, status)
                })
        }

        function getOrdersTotal() {
            var total = 0
            scope.orders.map((order, i) => {
                total += order.total
            })
            scope.ordersTotal = total
            scope.totalType = (scope.ordersTotal > 100) ? 'success' : 'danger'
        }
        init()
    }
])