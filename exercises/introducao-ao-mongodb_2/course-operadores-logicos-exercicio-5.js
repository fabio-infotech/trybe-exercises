// Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 ou menor que 10 , e esteja localizado no bairro Brooklyn ou não possuem culinária do tipo Delicatessen
db.restaurants.count({
	$and: [
		{ $or: [{ rating: { $gt: 6, $lt: 10 } }] },
	 	{ $or: [{ borough: "Brooklyn" }, { cuisine: { $ne: "Delicatessen" } }] }
	]
});
