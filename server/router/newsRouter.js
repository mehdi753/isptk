const express = require('express');
const router = express.Router();
const newsCtrl = require('../controller/newsCtrl');

router.post('/create', newsCtrl.create);
router.delete('/delete', newsCtrl.delete);
router.get('/show', newsCtrl.show);
router.get('/show/:id', newsCtrl.showOne);
module.exports = router;