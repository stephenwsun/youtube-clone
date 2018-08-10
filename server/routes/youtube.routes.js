const express = require('express');
const router = express.Router();
const channel_controller = require('../controllers/channel.controller');

router.get('/channel', channel_controller.channel);
// router.get('/channel', channel_controller.channel_data);

module.exports = router;