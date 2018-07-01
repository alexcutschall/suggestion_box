app.factory("SuggestionController", ['$scope',
'suggestions', '$routeParams', function($scope,
suggestions,$routeParams) {
  $scope.post = suggestions[$routeParams.id];

  $scope.addComment = function() {
    $scope.post.comments.push({
      body: $scope.body,
      upvotes: 0
    })
  };

  $scope.upvoteComment = function(post) {
    $post.upvotes += 1;
  };

}])
