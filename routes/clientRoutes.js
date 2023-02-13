const express = require('express')
const { getInfo } = require('../controllers/clientController')
const router = express.Router()

router.post('/', getInfo)

module.exports = router