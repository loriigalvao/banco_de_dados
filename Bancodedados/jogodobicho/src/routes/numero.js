const express = require('express');
const router = express.Router()
const aposta = require('../controllers/numero.js');

router.post('/', numero.createNumero);
router.get('/', numero.getNumero);
router.get('/:id', numero.getNumeroById);
router.put('/:id', numero.updateNumero);
router.delete('/:id', numero.deleteNumero);

export default router;