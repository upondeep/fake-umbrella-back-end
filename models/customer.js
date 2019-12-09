var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    name: String,
    person_of_contact: String,
    telephone_number: String,
    location: String,
    number_of_employees: Number,
});

module.exports = mongoose.model('CustomerModel', CustomerSchema);