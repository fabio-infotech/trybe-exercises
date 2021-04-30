// Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" )
db.superheroes.count({ "aspects.hairColor": { $in: ["black", "No Hair"] } });
