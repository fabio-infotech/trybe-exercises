// Retorne o total de super-heróis com olhos azuis
db.superheroes.count({ "aspects.eyeColor": "blue" });
db.superheroes.count({ "aspects.eyeColor": { $eq: "blue" } });
