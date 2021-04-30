// Selecione e faça a contagem dos restaurantes que possuem avaliação (campo rating ) maior ou igual a 8
db.restaurants.find({ rating: { $gte: 8 } }).count();
