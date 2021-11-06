const express = require('express');
const router = express.Router();
const categoryCtrl = require('../../controllers/api/category');

// POST /api/category
router.get('/', categoryCtrl.index);
router.post('/', categoryCtrl.create);

module.exports = router;