const express = require('express');
const router = express.Router();
const channel_controller = require('../controllers/channel.controller');

router.get('/videos', channel_controller.videos);
router.get('/channels', channel_controller.channels);
// router.get('/channel', channel_controller.channel_data);

module.exports = router;