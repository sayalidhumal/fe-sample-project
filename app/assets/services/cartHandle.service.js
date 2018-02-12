angular.module('Service',[]).factory('CartHandle',CartHandle);
CartHandle.$inject=['$rootScope']
function CartHandle($rootScope) {
    var cart = {};
    cart.cartCount = 0;
    cart.items=[];
    cart.prepForBroadcast = function (cnt,items) {
        this.cartCount = cnt;
        this.items=items;
        this.broadcastItem();
    };
    
    cart.broadcastItem = function () {
        $rootScope.$broadcast('handleBroadcast');
    };

    return cart;

}