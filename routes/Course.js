const models  = require('../models');
const express = require('express');
const router = express.Router();
const controller = require('../controllers').CourseController;

router.get('/', controller.listAll)
router.get('/search', controller.searchRecords)
router.get('/:id', controller.readRecord)
router.post('/', controller.createRecord)
router.put('/', controller.updateRecord)
router.delete('/:id',controller.deleteRecord)


module.exports = router;