const express = require('express');
const router = express.Router();
const contactCtrl = require('../controller/contactCtrl');

router.post('/create', contactCtrl.create);
router.delete('/delete', contactCtrl.delete);
router.get('/show', contactCtrl.show);
router.get('/show/:id', contactCtrl.showOne);

module.exports = router;