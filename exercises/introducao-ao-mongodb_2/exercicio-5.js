// Selecione um super-herói com 2.00m ou mais de altura
db.superheroes.find({ "aspects.height": { $gte: 200 } }).limit(1).pretty();
db.superheroes.findOne({ "aspects.height": { $gte: 200 } });
