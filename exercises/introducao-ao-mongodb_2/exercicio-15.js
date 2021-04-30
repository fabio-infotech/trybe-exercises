// Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes e não sejam publicados pela DC Comics
db.superheroes.find({ 
  $and: [ 
    { "aspects.weight": { $gte: 80, $lte: 200 } }, 
    { race: { $in: [ "Human", "Mutants" ] } }, 
    { publisher: { $ne: "DC Comics" } } 
  ] 
}).pretty();

db.superheroes.find({ 
  $and: [ 
    { "aspects.weight": { $gte: 80, $lte: 200 } }, 
    { $or: [{ race: "Human" }, { race: "Mutants" }] }, 
    { publisher: { $ne: "DC Comics" } } 
  ] 
}).pretty();
