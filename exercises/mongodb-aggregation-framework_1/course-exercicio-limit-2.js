// Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson"
db.transactions.aggregate(
  [
    {
      $match: {
        $or: [
          { from: "Lisa Simpson" },
          { value: { $gte: 700, $lte: 6000 }},
        ],
      },
    },
  ],
).pretty();
