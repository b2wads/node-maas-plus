const router = require('express').Router()
const OperationsController = require('../controllers/operations-controller')

// Prefix: /api/v1/operations
router.post('/plus', OperationsController.plus)

module.exports = router
