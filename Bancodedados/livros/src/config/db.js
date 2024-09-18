const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://lorienygalvao:10102472980@cluster0.7kehm.mongodb.net/livro");
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1);
  }
};
connectDB()
module.exports = mongoose;