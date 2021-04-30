// Exiba os campos title , isbn e pageCount dos 3 primeiros livros. NÃO retorne o campo _id
db.books.find({}, {"_id": 0, "title": 1, "isbn": 1, "pageCount": 1}).limit(3).pretty();
