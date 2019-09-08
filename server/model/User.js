var mongoose = require('mongoose');

// Schema
var schema = new mongoose.Schema({
    userName : {type: String},
    phoneNumber : {type: String},
    address : {type: String},
    password : {type: String},
    email: {type: String},
    createdDate: {type: Date, require: true, default: Date.now}
});

// Model
var model = mongoose.model('User', schema);

// Public API
module.exports = model;
