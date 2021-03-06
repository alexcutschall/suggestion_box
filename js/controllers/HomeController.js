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
      upvotes: 0,
      comments: []
    });
    $scope.title = '';
  };

  $scope.addUpvote = function(post) {
    post.upvotes += 1;
  };

}])
