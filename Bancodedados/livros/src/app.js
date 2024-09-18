const express = require('express');
// const connectDB = require('./config/db');

const autores_routes = require('./routes/autores.js');
const livros_routes = require('./routes/livros.js');

const app = express();

//retirei a conexão da 
// Conectar ao banco de dados
// connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use('/autores', autores_routes);
app.use('/livros', livros_routes);

// Porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});