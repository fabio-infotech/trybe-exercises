// Remova todos os restaurantes que possuem culinária do tipo American
db.restaurants.deleteMany({ cuisine: "American" });
