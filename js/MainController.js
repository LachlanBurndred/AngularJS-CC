app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Dynifer Designs';
    $scope.promo = "Your Own String";
    $scope.products = [ 
  { 
    name: 'Skulduggery', 
    price: 19, 
    desc: "The first book in the series of an award winning fantasy universe.",
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/skulduggery.jpg' 
  }, 
  { 
    name: "Assassin's Creed: Renaissance", 
    price: 21.99, 
    desc: "A Novel by Oliver Bowden, based off the events that take place in the video game series Assassin's Creed.",
    pubdate: new Date('2007', '10', '26'), 
    cover: 'img/Renaissance.jpg' 
  },
  {
    name: "Harry Potter and the Philosopher's Stone",
    price: 15.99,
    desc: "The first in a series of the most popular fantasy universe in the world.",
    pubdate: new Date('1997', '5', '26'),
    cover: 'img/harry_potter1.jpg'
  }

];
    /*$scope.product = {
    	name:"Skulduggery Pleasant",
    	price: 19.99,
    	pubdate: new Date('2007', '03', '03')
    };
    $scope.product_desc = {
        name: 'Skulduggery Pleasant Book #1',
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
    };*/
}]);