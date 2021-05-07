// Retorne somente o título de todos os filmes com dois elementos no array category
db.movies.find(
  {
    category: {
      $size: 2
    },
  },
  {
    _id: -1,
    title: 1,
  }
);
