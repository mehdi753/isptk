const config = require('../config/database');
const Document = require('../models/document');

exports.create = (req, res, next) => {

    const document = new Document({
        img: req.body.img,
        title: req.body.title,
        content: req.body.content,
        links: req.body.content,
        dateTime: req.body.dateTime
    });
    document.save().then(() => {
        res.json({ status: true, msg: "Document saved" });
    }).catch((error) => {
        res.json({ status: false, msg: "Can't save Document" });
        console.log(error);
    });
}
exports.show = (req, res, next) => {
    Document.find().then((docs) => {
        res.json({ status: true, msg: "All Documents", documents: docs });
    }).catch(() => {
        res.json({ status: false, msg: "Can't show any document" })
    })
}
exports.showOne = (req, res, next) => {
    Document.findOne({ _id: req.params.id }).then((doc) => {
        res.json(doc);
    }).catch(() => {
        res.json({ status: false, msg: "Can't show any document" })
    })
}
exports.delete = (req, res, next) => {
    Document.deleteOne({ _id: req.body.id }).then((doc) => {
        res.json({ status: true, msg: "Document deleted" });
    }).catch((error) => {
        res.json({ status: false, msg: "Can't delete document" });
    })
}