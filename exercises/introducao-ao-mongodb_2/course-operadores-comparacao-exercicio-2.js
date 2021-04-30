// Selecione e faça a contagem dos restaurantes que não possuem culinária (campo cuisine ) do tipo American
db.restaurants.find({ cuisine: { $nin: [ "American" ] } }).count();
