// Selecione e faça a contagem dos restaurantes presentes nos bairros (campo borough ) Queens , Staten Island e Bronx
db.restaurants.find({ borough: { $in: [ "Queens", "Staten Island", "Bronx" ]}}).count();
