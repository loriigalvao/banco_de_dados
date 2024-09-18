const db = require('../config/db.js');
const Schema = db.Schema; 

const LivroSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        require: true
    },
    genero: {
        type: String,
        require: true
    }
});   
      console.log('Conectado');
      const Livro = db.model('Livro', LivroSchema);
      
      module.exports = Livro;
    

