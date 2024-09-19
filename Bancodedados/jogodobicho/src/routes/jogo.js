const express = require('express');
const router = express.Router()
const jogo = require('../controllers/jogo.js');

router.post('/', jogo.createJogo);
router.get('/', jogo.getJogo);
router.get('/:id', jogo.getJogoById);
router.put('/:id', jogo.updateJogo);
router.delete('/:id', jogo.deleteJogo);

export default router;