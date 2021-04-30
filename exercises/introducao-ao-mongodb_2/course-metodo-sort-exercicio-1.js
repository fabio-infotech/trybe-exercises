// Ordene alfabeticamente os restaurantes pelo nome (campo name )
db.restaurants.find().sort({ name: 1 }).pretty();
