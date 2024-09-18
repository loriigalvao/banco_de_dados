const db  = require('../config/db.js');
const Schema = db.Schema; 

const AutorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    endereco: {
        type: Object,
        required: true
    },
    email: {
        type: String,
        validate: {
            //validate permite que você defina uma regra para validar o valor inserido no campo antes de salvar o documento no banco de dados.
            validator: function (v) {
              return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
              //A função recebe v como argumento, que é o valor do campo email
            },
          },
      //     Explicação sobre o campo "email"
      // ^[a-zA-Z0-9._%+-]+: O início do e-mail deve conter letras maiúsculas e minúsculas (a-zA-Z), números (0-9), e os caracteres ., _, %, + e -.
      // @: é obrigatório e separa a parte do nome do usuário da parte do domínio.
      // [a-zA-Z0-9.-]+: O domínio deve conter letras (a-zA-Z), números (0-9), e os caracteres . e -.
      // \.: Um ponto literal separa o nome do domínio do TLD (como .com ou .org).
      // [a-zA-Z]{2,}$: O TLD (domínio de nível superior, como .com, .org, .br, etc.) deve conter apenas letras e ter pelo menos dois caracteres, podendo ser mais (como .com, .net, etc.).
      // ^ e $: Esses metacaracteres delimitam o início (^) e o fim ($) da string, garantindo que toda a string seja verificada e que ela corresponda exatamente ao padrão definido.
          required: true,  // O campo "email" é obrigatório
        } 
        // id_pet: { type: db.Schema.Types.ObjectId, ref: 'Pet' }
      });
      console.log('Conectado');
      const Autor = db.model('Autor', AutorSchema);
      
      module.exports = Autor;
    


