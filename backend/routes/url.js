const express = require('express');
const { generateShortURL, handleGetAnalytics } = require('../controller/url')
const router = express.Router();

//generate new short url and retrun
router.post('/', generateShortURL)

router.get('/analytics/:shortId', handleGetAnalytics )

module.exports = router;