// Aumente em 2 o imdbRating do filme Batman
db.movies.updateOne
(
  { title: "Batman" },
  {
    $set: { imdbRating: 2 }
  },
);
