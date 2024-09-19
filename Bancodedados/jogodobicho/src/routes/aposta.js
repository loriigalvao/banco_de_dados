const express = require('express');
const router = express.Router()
const aposta = require('../controllers/aposta.js');

router.post('/', aposta.createAposta);
router.get('/', aposta.getAposta);
router.get('/:id', aposta.getApostaById);
router.put('/:id', aposta.updateAposta);
router.delete('/:id', aposta.deleteAposta);

export default router;