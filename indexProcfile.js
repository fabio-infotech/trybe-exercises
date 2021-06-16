const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.send(`Procfile funciona mesmo! ${ process.env.ENVIROMENT }`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${ PORT }`);
});
