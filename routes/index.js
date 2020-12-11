const router = require('express').Router()

const employee = require('./employeeRouter')
router.use('/api', employee)

module.exports = router