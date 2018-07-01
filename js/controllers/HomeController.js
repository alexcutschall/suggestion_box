app.controller("HomeController", ["$scope", "suggestions",
 function($scope, suggestions) {
  $scope.helloWorld = "Hello World";
  $scope.posts = suggestions.posts;
}])
