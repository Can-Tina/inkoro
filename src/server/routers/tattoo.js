const express = require('express');

const {
    getAllTattoos,
    getUserTattoos,
    connectUserAndTattoo,
    disconnectUserAndTattoo
} = require('../controllers/tattoo');

const router = express.Router();

router.get('/', getAllTattoos)
router.get('/:id', getUserTattoos)

router.post('/connect/:tattoo/:user', connectUserAndTattoo)
router.post('/disconnect/:tattoo/:user', disconnectUserAndTattoo)

module.exports = router