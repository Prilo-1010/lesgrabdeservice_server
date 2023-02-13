const express = require('express')
const router = express.Router()
const { getWork, getWorks} = require('../controllers/portfolioController')


router.get('/', getWorks )
router.get('/:id', getWork )

module.exports = router