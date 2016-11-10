/**
 * Routes
 */
const router = require('express').Router()
const DvdController = require('./controllers/DvdController')
const dvdController = new DvdController()

router.get('/', dvdController.index)
router.get('/detail/:id?', dvdController.detail)

module.exports = router