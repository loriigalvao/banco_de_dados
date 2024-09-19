const express = require('express');
const router = express.Router()
const bicho = require('../controllers/bicho.js');

router.post('/', bicho.createBicho);
router.get('/', bicho.getBicho);
router.get('/:id', bicho.getBichoById);
router.put('/:id', bicho.updateBicho);
router.delete('/:id', bicho.deleteBicho);

export default router;