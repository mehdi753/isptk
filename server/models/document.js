const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
    img: { type: String },
    title: { type: String, require: true },
    content: { type: String, require: true },
    links: { type: String },
    dateTime: { type: String, require: true }
});

const Document = module.exports = mongoose.model('Document', DocumentSchema);