// Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ices
db.restaurants.deleteOne({ cuisine: "Ice Cream, Gelato, Yogurt, Ices" });
