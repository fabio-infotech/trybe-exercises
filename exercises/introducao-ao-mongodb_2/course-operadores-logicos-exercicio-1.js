// Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5 , essa query também deve retornar restaurantes que não possuem o campo avaliação
db.restaurants.find({ rating: { $not: { $lte: 5 } } }).count();
