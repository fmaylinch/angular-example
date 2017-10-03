
// Defines an angular module.
// Sets your module name and an array of dependencies (optional).
const myApp = angular.module('myApp', []);


// Defines a controller for the view.
// The parameters in the function are the required services (injected by angular)
myApp.controller('MyController', function($scope, $http) {

  // Data into the $scope can be read from the view (html)
  $scope.book = {
    title: "A brief history of time",
    author: "Stephen Hawkins",
    year: 1988,
    fiction: false,
    image: "http://www.age-of-the-sage.org/scientist/a_brief_history_of_time_hawking.jpg"
  };

  // We can display all the items in an array using ng-repeat on the view
  $scope.books = [
    {
      title: "1984",
      author: "George Orwell",
      year: 1970,
      fiction: true
    },
    {
      title: "Blank Slate",
      author: "Steven Pinker",
      year: 1980,
      fiction: false
    },
    {
      title: "A brief history of time",
      author: "Stephen Hawkins",
      year: 1988,
      fiction: false,
      image: "http://www.age-of-the-sage.org/scientist/a_brief_history_of_time_hawking.jpg"
    }
  ];


  // Functions added to the $scope can be called from the view
  $scope.addBook = function() {
    console.log("Adding book", $scope.newBook);
    $scope.books.push( $scope.newBook );
    $scope.newBook = {}; // clear form (and avoid reusing the same object)
  };


  // Ajax call

  // Using https://openlibrary.org/developers/api
  const title = "the man who mistook his wife for a hat";
  const url = "http://openlibrary.org/search.json?title=" + title;

  // $http is similar to fetch, axios, jQuery ajax, etc.
  // Actually, axios was inspired by $http.
  $http({
    method: 'GET',
    url: url
  }).then(function(response) {
    // ok callback
    // response.data contains the reponse json
    $scope.booksFromApi = response.data.docs;
  }, function(response) {
    // error callback
    console.error(response);
  });






});
