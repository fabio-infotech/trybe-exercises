// Selecione os bancos que têm o valor total de transações maior que 1000
db.transactions.aggregate(
  [
    {
      $group: {
        _id: "$bank",
        totalSales: { $sum: "$value" },
      },
    },
    {
      $match: { "totalSales": { $gt: 1000 } },
    },
  ],
);
