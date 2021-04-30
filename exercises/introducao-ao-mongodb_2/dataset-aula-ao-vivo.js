use aula-filter-operators

db.filmes.insertMany(
  [
    { "titulo": "O Planeta dos Macacos", "ano": 1968, "diretor": "Franklin J", "avaliacao": { "bom": 5, "medio": 6, "ruim": 4 } },
    { "titulo": "2001 - Uma Odisséia no Espaço", "ano": 1968, "diretor": "Stanley Kubrick", "avaliacao": { "bom": 6, "medio": 4, "ruim": 9 } },
    { "titulo": "John Carter: Entre Dois Mundos", "ano": 1968, "diretor": "Franklin J", "avaliacao": { "bom": 9, "medio": 10, "ruim": 4 } },
    { "titulo": "O Senhor dos Anéis", "ano": 2001, "diretor": "Peter Jackson", "avaliacao": { "bom": 7, "medio": 9, "ruim": 5 } },
    { "titulo": "Cães de Aluguel", "ano": 1993, "diretor": "Quentin Tarantino", "avaliacao": { "bom": 2, "medio": 7, "ruim": 4 } },
    { "titulo": "Psicopata Americano", "ano": 2000, "diretor": "Mary Harron", "avaliacao": { "bom": 7, "medio": 2, "ruim": 5 } },
    { "titulo": "Interestelar", "ano": 2014, "diretor": "Christopher Nolan", "avaliacao": { "bom": 8, "medio": 8, "ruim": 1 } },
    { "titulo": "Transformers: The Last Knight", "ano": 2017, "diretor": "Michael Bay", "avaliacao": { "bom": 9, "medio": 4, "ruim": 3 } },
    { "titulo": "Os Mercenários", "ano": 2010, "diretor": "sylvester Stallone", "avaliacao": { "bom": 7, "medio": 4, "ruim": 10 } },
    { "titulo": "Kill Bill", "ano": 2003, "diretor": "Quentin Tarantino", "avaliacao": { "bom": 4, "medio": 2, "ruim": 2 } },
    { "titulo": "Planeta Terror", "ano": 2007, "diretor": "Robert Rodriguez", "avaliacao": { "bom": 7, "medio": 6, "ruim": 6 } },
    { "titulo": "A Pele que Habito", "ano": 2011, "diretor": "Pedro Almodovar", "avaliacao": { "bom": 3, "medio": 4, "ruim": 3 } },
    { "titulo": "Um Drink no Inferno", "ano": 1996, "diretor": "Quentin Tarantino", "avaliacao": { "bom": 6, "medio": 7, "ruim": 6 } },
    { "titulo": "Pulp Fiction", "ano": 1995, "diretor": "Quentin Tarantino", "avaliacao": { "bom": 7, "medio": 2, "ruim": 1 } },
    { "titulo": "Django Livre", "ano": 2013, "diretor": "Quentin Tarantino", "avaliacao": { "bom": 2, "medio": 1, "ruim": 2 } },
    { "titulo": "O Poderoso Chefão", "ano": 1972, "diretor": "Francis Ford Coppola", "avaliacao": { "bom": 4, "medio": 7, "ruim": 6 } },
    { "titulo": "Matrix", "ano": 1999, "diretor": "Andy Wachowski", "avaliacao": { "bom": 2, "medio": 10, "ruim": 4 } },
    { "titulo": "Medianeras", "ano": 2011, "diretor": "gustavo Taretto", "avaliacao": { "bom": 7, "medio": 5, "ruim": 10 } },
    { "titulo": "Os Oito Odiados", "ano": 2016, "diretor": "Quentin Tarantino", "avaliacao": { "bom": 6, "medio": 10, "ruim": 7 } },
    { "titulo": "Na Natureza Selvagem", "ano": 2008, "diretor": "Sean Penn", "avaliacao": { "bom": 3, "medio": 4, "ruim": 5 } },
    { "titulo": "Sobre Meninos e Lobos", "ano": 2003, "diretor": "Clint Eastwood", "avaliacao": { "bom": 3, "medio": 7, "ruim": 10 } },
    { "titulo": "Batman: O Cavaleiro das Trevas", "ano": 2008, "diretor": "Christopher Nolan", "avaliacao": { "bom": 6, "medio": 9, "ruim": 5 } },
    { "titulo": "Batman vs Superman: A Origem da Justiça", "ano": 2016, "diretor": "Zack Snyder", "avaliacao": { "bom": 2, "medio": 2, "ruim": 6 } },
    { "titulo": "O predestinado", "ano": 2015, "diretor": "Michael Spierig", "avaliacao": { "bom": 5, "medio": 2, "ruim": 8 } },
    { "titulo": "Harry Potter e o Prisioneiro de Azkaban", "ano": 2004, "diretor": "J.K. Rowling", "avaliacao": { "bom": 5, "medio": 7, "ruim": 1 } },
    { "titulo": "Animais Fantásticos e Onde Habitam", "ano": 2016, "diretor": "J.K. Rowling", "avaliacao": { "bom": 8, "medio": 2, "ruim": 5 } },
    { "titulo": "Harry Potter e as Relíquias da Morte:Parte 2", "ano": 2011, "diretor": "J.K. Rowling", "avaliacao": { "bom": 7, "medio": 4, "ruim": 3 } },
    { "titulo": "Harry Potter e a Câmara Secreta", "ano": 2002, "diretor": "J.K. Rowling", "avaliacao": { "bom": 8, "medio": 7, "ruim": 3 } },
    { "titulo": "Alice no País das Maravilhas", "ano": 2010, "diretor": "Tim Burton", "avaliacao": { "bom": 1, "medio": 7, "ruim": 3 } },
    { "titulo": "Harry Potter e o Cálice de Fogo", "ano": 2005, "diretor": "J.K. Rowling", "avaliacao": { "bom": 10, "medio": 6, "ruim": 2 } },
    { "titulo": "A Lista de Schindler", "ano": 1993, "diretor": "Steven Spielberg", "avaliacao": { "bom": 9, "medio": 7, "ruim": 2 } },
    { "titulo": "Harry Potter e as Relíquias da Morte:Parte 1", "ano": 2010, "diretor": "J.K. Rowling", "avaliacao": { "bom": 4, "medio": 3, "ruim": 7 } },
    { "titulo": "Harry Potter e a Pedra Filosofal", "ano": 2001, "diretor": "J.K. Rowling", "avaliacao": { "bom": 6, "medio": 5, "ruim": 9 } },
    { "titulo": "Indiana Jones e a Última Cruzada", "ano": 1989, "diretor": "Steven Spielberg", "avaliacao": { "bom": 4, "medio": 3, "ruim": 4 } },
    { "titulo": "Harry Potter e o Enigma do Príncipe", "ano": 2009, "diretor": "J.K. Rowling", "avaliacao": { "bom": 1, "medio": 3, "ruim": 6 } },
    { "titulo": "Band of Brothers", "ano": 2001, "diretor": "Steven Spielberg", "avaliacao": { "bom": 5, "medio": 8, "ruim": 8 } },
    { "titulo": "Harry Potter e a Ordem da Fênix", "ano": 2007, "diretor": "J.K. Rowling", "avaliacao": { "bom": 9, "medio": 5, "ruim": 7 } }
  ]
);
