angular.module("CartLy").controller('CartController',CartController);

CartController.$inject=['$mdDialog','CartHandle'];

function CartController($mdDialog,CartHandle) {
    var vm=this;
    vm.cartitems = CartHandle.items;
    vm.total = 0;
    for(var i =0;i<vm.cartitems.length;i++){
        vm.total =  (parseFloat(vm.total) + parseFloat(vm.cartitems[i].price)).toFixed(2);
    }

    vm.remove = function (item) {
        for(var i =0;i<vm.cartitems.length;i++){
            if(item.name === vm.cartitems[i].name){
                vm.cartitems.splice(i,1);
                vm.total = (parseFloat(vm.total) - parseFloat(item.price)).toFixed(2);
                CartHandle.prepForBroadcast(vm.cartitems.length,vm.cartitems)
            }
        }
    };

    vm.cancel = function() {
        $mdDialog.cancel();
    };
}