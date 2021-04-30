// Ordene os restaurantes de forma descrescente baseado nas avaliações
db.restaurants.find().sort({ rating: -1 }).pretty();
