import conn from '../conn.js';

const Schema = conn.Schema;

const BichoSchema = new Schema({
  nome: { type: String, 
        required: true },
  numero: {
    type: [ Number],
    required: true
    }
 
});

const Bicho = conn.model('Bicho', BichoSchema);

export default Bicho