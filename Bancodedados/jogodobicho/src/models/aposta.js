import conn from '../conn.js';
const Schema = conn.Schema; 
const BichoSchema = new Schema ({
    nome: {
        type: Schema.Types.String,
        required: true
    },
    numero: {
        type: [Schema.Types.Number],
        min: 0,
        max: 99,
        validate: function(v) {
            return v.lenght == 4 && v.every(n => n >= 0 && n < 100)
        }
    }
})

const ApostaSchema = new Schema({
    valor: {
        type: Schema.Types.Number,
        min: 0,
        require: true,
    },
    retorno: {
        type: Schema.Types.Number,
        require: false,
    },
    bicho: {
        type: Schema.Types.ObjectId,
        validate(v) {
            return v.length < 5
        },
        require: true
    },
    numeros: {
        type: [Schema.Types.Number],
        validate(v) {
            return v.length % 4 == 0 && v.length <= 20
        },
        require: true
    },
    chavePix: {
        type: Schema.Types.String,
        require: true
    }, 
    
    jogo: {
        type: Schema.Types.String,
        ref: "Jogo"
    }
},{
    timestamps:true
})

      
      const Aposta = conn.model('Aposta', ApostaSchema);
      
      export default Aposta