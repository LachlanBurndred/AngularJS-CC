app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Mistfire Designs';
    $scope.promo = "Your Own String";
    $scope.products = [ 
  { 
    name: 'Skulduggery', 
    price: 19, 
    desc: "The first book in the series of an award winning fantasy universe.",
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/skulduggery.jpg',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: "Assassin's Creed: Renaissance", 
    price: 21.99, 
    desc: "A Novel by Oliver Bowden, based off the events that take place in the video game series Assassin's Creed.",
    pubdate: new Date('2007', '10', '26'), 
    cover: 'img/Renaissance.jpg',
    likes: 0,
    dislikes: 0
  },
  {
    name: "Harry Potter and the Philosopher's Stone",
    price: 15.99,
    desc: "The first in a series of the most popular fantasy universe in the world.",
    pubdate: new Date('1997', '5', '26'),
    cover: 'img/harry_potter1.jpg',
    likes: 0,
    dislikes: 0
  }

];
    $scope.minusOne = function(index) {
        $scope.products[index].dislikes +=1;
    }
    $scope.plusOne = function(index) {
        $scope.products[index].likes += 1;
    }
}]); 