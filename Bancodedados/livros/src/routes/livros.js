const express = require('express');
const router = express.Router();
const livro = require('../controllers/livros.js');


router.post('/', livro.createLivro);
router.get('/', livro.getLivros);
router.get('/:id', livro.getLivroById);
router.put('/:id', livro.updateLivro);
router.delete('/:id', livro.deleteLivro);

module.exports = router;