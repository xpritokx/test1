let express = require('express');
let router = express.Router();

let ConsumerController = require('../controllers/ConsumerController');

router.get('/', ConsumerController.getAllConsumersByDate);

module.exports = router;