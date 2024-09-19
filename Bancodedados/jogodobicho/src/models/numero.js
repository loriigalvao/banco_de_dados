const conn = require('../conn.js');
const Schema = conn.Schema; 

const NumeroSchema = new Schema({
    bicho: {
        type: String,
        ref: "Bicho"
    
    },
    numero: {
        type: Number,
        require: true
    }
});   

      const Numero = conn.model('Numero', NumeroSchema);
      
      export default Numero
    
