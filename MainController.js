app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'DyNight Designs';
    $scope.promo = "DyNight Designs Test Text";
    $scope.product = {
    	name:"Skulduggery Pleasant",
    	price: 19.99,
    	pubdate: new Date('2007', '03', '03')
    };
    $scope.product_desc = {
        name: 'Skulduggery Pleasant',
        desc: 'A description of the book'
    };
    $scope.product2 = {
        name: "Assassin's Creed: Renaissance",
        price: 21.99,
        pubdate: new Date('2009', '10', '26')
    };
    $scope.product2_desc = {
        name: "Assassin's Creed: Renaissance",
        desc: "Based off the Assassin's Creed Video Game series."
    };
}]);