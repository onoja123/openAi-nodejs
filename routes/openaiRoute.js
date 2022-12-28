const express = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = express();

router.post('/generateimage', generateImage);

module.exports = router;