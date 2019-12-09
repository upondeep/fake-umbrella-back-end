var express = require('express');
var router = express.Router();
var customer_controller = require('../controllers/customersController');
// var CustomerModel = require('../models/customer');

router.get('/', customer_controller.get_all_customers);

router.post('/create', customer_controller.create_customer);

router.delete('/:id', customer_controller.delete_customer);

router.put('/update', customer_controller.update_customer);

router.get('/:id', customer_controller.get_customer);

module.exports = router;