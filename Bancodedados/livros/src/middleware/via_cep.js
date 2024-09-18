const axios = require("axios")

const cep_endereco = (req, res, next) => {

   req.body.endereco = req.body.endereco
   if (
      req.body.endereco&&
      !isNaN(Number(req.body.endereco))
    ) {

      axios.get(`https://viacep.com.br/ws/${req.body.endereco}/json/`)
         .then(resposta => {
             
             delete req.body.endereco
             
             req.body.endereco = resposta.data

            next()
         })
   } else {
      res.status(400).json()

   }
}

module.exports = cep_endereco