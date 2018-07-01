app.controller("HomeController", ["$scope",
"suggestions",
 function($scope, suggestions) {
  $scope.helloWorld = "Hello World";
  $scope.posts = suggestions.posts;

  $scope.addSuggestion = function() {

    if ($scope.title == false || $scope.title == '') {
      return;
    }

    $scope.posts.push({
      title: $scope.title,
      upvotes: 0
    });

    $scope.title = '';
  };
}])
