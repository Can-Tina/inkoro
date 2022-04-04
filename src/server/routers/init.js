const express = require('express')

const {
    getTattoosFromAPI
} = require('../controllers/init')

const router = express.Router();

router.post('/', getTattoosFromAPI)

module.exports = router;