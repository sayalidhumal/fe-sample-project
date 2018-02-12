'use strict'

angular.module('CartLy').controller('HomeController',HomeController);

HomeController.$inject = ['$scope','CartHandle']

function HomeController($scope,CartHandle) {
    var vm = this;
    vm.products = {
        "products": [
            {
                "filename": "../../images/618328744.png",
                "price": 51.27,
                "name": "Mens Fashion Shirts"
            },
            {
                "filename": "../../images/618842634.png",
                "price": 57.04,
                "name": "Casual jacket"
            },
            {
                "filename": "../../images/619521178.png",
                "price": 3.97,
                "name": "Mens work shirt"
            },
            {
                "filename": "../../images/623270836.png",
                "price": 32.37,
                "name": "Running Shoes"
            },
            {
                "filename": "../../images/638571516.png",
                "price": 57.74,
                "name": "Leather lacket"
            },
            {
                "filename": "../../images/649597850.png",
                "price": 87.45,
                "name": "Snow Boots"
            },
            {
                "filename": "../../images/656678076.png",
                "price": 90.12,
                "name": "Mens Fashion Shirts"
            },
            {
                "filename": "../../images/666666252.png",
                "price": 88.83,
                "name": "Womens white sweater"
            },
            {
                "filename": "../../images/666666466.png",
                "price": 77.67,
                "name": "Womens red jacket"
            },
            {
                "filename": "../../images/675606742.png",
                "price": 70.57,
                "name": "Pastel everyday wear"
            },
            {
                "filename": "../../images/806813490.png",
                "price": 22.46,
                "name": "Longsleeve workout shirt"
            }
        ]
    };
    vm.cart={
        count:0,
        items:[]
    };
    vm.addItem = addItem;

    function addItem(product) {
        product = angular.copy(product);
        product.id = vm.cart.items.length+1;
        vm.cart.items.push(product);
        vm.cart.count=vm.cart.count+1;
        if(CartHandle.cartCount){
            CartHandle.prepForBroadcast(vm.cart.count,vm.cart.items)
        }else{
            CartHandle.prepForBroadcast(1,vm.cart.items)
        }
    }

    $scope.$on('handleBroadcast',function () {
        vm.cartItemsCount = CartHandle.cartCount;
    })

}