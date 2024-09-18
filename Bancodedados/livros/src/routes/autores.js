const express = require('express');
const router = express.Router();
const autor = require('../controllers/autores.js');
const via_cep = require('../middleware/via_cep.js');

router.post('/', via_cep, autor.createAutor);
router.get('/', autor.getAutores);
router.get('/:id', autor.getAutorById);
router.put('/:id', autor.updateAutor);
router.delete('/:id', autor.deleteAutor);

module.exports = router;