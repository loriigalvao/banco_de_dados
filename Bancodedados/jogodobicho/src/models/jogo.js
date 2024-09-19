import conn from '../conn.js'
const Schema = conn.Schema; 

const JogoSchema = new Schema({
    numeroEscolhido: [{
        type: Schema.Types.Number,
        require: false,
        min: 0,
        max: 99
    }],
    vencedores: [{
        type: Schema.Types.ObjectId,
        require: "Aposta"
    }],
    dataInicio: {
        type: Schema.Types.Date,
        require: true
    },
    dataFim: {
        type: Schema.Types.Date,
        require: true
    }
});   
      
      const Jogo = conn.model('Jogo', JogoSchema);
      
      export default Jogo