const express = require('express')
const router = express.Router()
const controller = require('../controllers/todo_Controller')


router.get('/todo', controller.getList)
router.post('/todo', controller.postList)
router.post('/delete/:id', controller.deleteList)

module.exports = router