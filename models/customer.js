var mongoose = require('mongoose');

var Schema = mongoose.Schema;
// ObjectId = Schema.ObjectId;

var CustomerSchema = new Schema({
    name: String,
    person_of_contact: String,
    telephone_number: String,
    location: String,
    number_of_employees: Number,
});

CustomerSchema.virtual('customer_id').get(function () {
    return this._id;
});

module.exports = mongoose.model('CustomerModel', CustomerSchema);