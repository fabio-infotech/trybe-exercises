// Aumente em 5 o budget do filme Home Alone
db.movies.updateOne
(
  { title: "Home Alone" },
  { 
    $set: { budget: 5 }
  },
);
