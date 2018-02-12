'use strict'

angular.module('CartLy').controller('LayoutController',LayoutController);

LayoutController.$inject =['$scope','CartHandle','$mdDialog']

function LayoutController($scope,CartHandle,$mdDialog) {
    var vm=this;
    vm.popup = popup;
    vm.cartItemsCount=0;
    vm.items=[];
    vm.action = false;
    vm.shopcheck = true;
    vm.cartcheck = false;
    $scope.$on('handleBroadcast',function () {
        vm.cartItemsCount = CartHandle.cartCount;
        vm.items = CartHandle.items;
    });
    function popup(ev,action) {
        if(action){
            $mdDialog.show({
                controller: CartController,
                controllerAs: 'vm',
                templateUrl: 'controllers/cart/cart.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: true
            })
        }else {
            vm.cartcheck = false;
            vm.shopcheck = true;
        }
    }

}