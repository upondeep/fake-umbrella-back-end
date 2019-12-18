var CustomerModel = require('../models/customer');

exports.get_customer = async function (req, res, next) {
    var result;
    try {
        var id = req.params.id;
        result = await CustomerModel.find({ _id: id });
        return res.status(200).send(result);
    } catch (e) {
        return res.status(500).send({ error: 'no record found.' });
    }
};

exports.get_all_customers = async function (req, res, next) {
    var result;
    try {
        result = await CustomerModel.find().select(['-__v', '-id']);
    } catch (e) {
        result = [];
    }
    return res.send(result);
};

exports.create_customer = async function (req, res, next) {
    try {
        var newBook = new CustomerModel(req.body);
        await newBook.save();
        next();
        return res.status(201).send(newBook);
    } catch (e) {
        return res.status(500).send({ error: 'create document failed.' });
    };
};

exports.delete_customer = async function (req, res, next) {
    try {
        var id = req.params.id;
        await CustomerModel.find({ _id: id }).remove().exec();
        return res.status(200).send({ status: 'deleted.' });
    } catch (e) {
        return res.status(500).send({ error: 'delete failed.' });
    }
};

exports.update_customer = async function (req, res, next) {
    var result, id;
    try {
        id = req.body.customer_id;
        await CustomerModel.find({ _id: id }).update(req.body);
        result = await CustomerModel.find({ _id: id });
        return res.status(204).send(result);
    } catch (e) {
        return res.status(500).send({ error: 'update document failed.' });
    }

};
