require('dotenv').config();

const express = require('express');
const { connect } = require('./infrastructure/database/connection');
const orderRoutes = require('./infrastructure/http/routes/orderRoutes');
const errorHandler = require('./infrastructure/http/middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use('/order', orderRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}.`));
  })
  .catch((err) => {
    console.error('Falha ao conectar no MongoDB:', err.message);
    process.exit(1);
  });
