app.factory("suggestions", [function() {
  let demoSuggestions = {
    posts: [
      {
        title: "We should get pizza",
        upvotes: 15,
        comments: [],
      },
      {
        title: "We should all sing songs",
        upvotes: 20,
        comments: [],
      },
      {
        title: "We should do some crazy things",
        upvotes: 2,
        comments: [],
      },
      {
        title: "We should just play video games",
        upvotes: 100,
        comments: [],
      }
    ]
  };
  return demoSuggestions;
}])
