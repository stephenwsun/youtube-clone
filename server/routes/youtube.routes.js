const express = require('express');
const router = express.Router();
const channel_controller = require('../controllers/channel.controller');

router.get('/videos', channel_controller.videos);
router.get('/channels', channel_controller.channels);
router.get('/videos/:id', channel_controller.video_details);
router.get('/channels/:id', channel_controller.channel_details);

module.exports = router;