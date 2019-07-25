var express = require('express');
var router = express.Router();
var servicesController = require('../controllers/servicesController');


/* GET services listing. */
router.get('/', servicesController.services_all_get);

router.get('/:id', servicesController.services_detail_get);

module.exports = router;
