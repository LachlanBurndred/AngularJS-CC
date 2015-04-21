app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'DyNight Designs';
    $scope.promo = "Your Own String";
    $scope.product = {
    	name:"Skulduggery Pleasant",
    	price: 19.99
    };
    $scope.product_desc = {
        name: 'Skulduggery Pleasant',
        desc: 'A description of the book'
    };
}]);