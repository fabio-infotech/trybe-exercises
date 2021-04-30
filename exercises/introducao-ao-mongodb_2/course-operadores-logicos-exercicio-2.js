// Selecione e faça a contagem dos restaurante em que a avaliação seja maior ou igual a 6 , ou restaurantes localizados no bairro Brooklyn
db.restaurants.count({
	$or: [
		{ rating: { $gte: 6 } },
	  { borough: "Brooklyn" }
	]
});
