// Selecione quatro clientes com as suas respectivas transações recebidas
db.clients.aggregate(
  [
    {
      $lookup: {
        from: "transactions",
        localField: "name",
        foreignField: "from",
        as: "transactions",
      },
    },
    { $limit: 4 },
  ],
).pretty();
