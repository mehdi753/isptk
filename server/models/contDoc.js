const mongoose = require('mongoose');

const DocSchema = mongoose.Schema({
    name: { type: String, require: true },
    fname: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    msg: { type: String, require: true }
});

const Doc = module.exports = mongoose.model('Doc', DocSchema);