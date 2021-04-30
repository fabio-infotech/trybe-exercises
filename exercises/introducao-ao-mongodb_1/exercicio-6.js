// Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos
db.bios.find().skip(1).limit(2).pretty();
