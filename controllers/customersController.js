var CustomerModel = require('../models/customer');

exports.get_all_customers = async function (req, res, next) {
    var result;
    try {
        result = await CustomerModel.find();
    } catch (e) {
        result = [];
    }
    return res.send(result);
};

exports.create_customer = async function (req, res, next) {
    try {
        console.log(req.body);
        var newBook = new CustomerModel(req.body);
        await newBook.save();
        return res.status(200).send({ customer_id: newBook.customer_id, ...req.body });
    } catch (e) {
        return res.status(500).send({ error: 'create failed.' });
    };
};

exports.delete_customer = async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).send({ error: 'delete failed.' });
    }
};

exports.update_customer = async function (req, res, next) { };

exports.get_customer = async function (req, res, next) { };