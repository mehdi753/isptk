const config = require('../config/database');
const Doc = require('../models/contDoc');

exports.create = (req, res, next) => {
    const document = new Doc({
        name: req.body.name,
        fname: req.body.fname,
        email: req.body.email,
        phone: req.body.phone,
        msg: req.body.msg
    });
    document.save().then(() => {
        res.json({ status: true, msg: "Document saved" });
    }).catch((error) => {
        res.json({ status: false, msg: "Can't save Document" });
        console.log(error);
    });
}
exports.show = (req, res, next) => {
    Doc.find().then((docs) => {
        res.json({ status: true, msg: "All Documents", documents: docs });
    }).catch(() => {
        res.json({ status: false, msg: "Can't show any document" })
    })
}
exports.showOne = (req, res, next) => {
    Doc.findOne({ _id: req.params.id }).then((doc) => {
        res.json(doc);
    }).catch(() => {
        res.json({ status: false, msg: "Can't show any document" })
    })
}
exports.delete = (req, res, next) => {
    Doc.deleteOne({ _id: req.body.id }).then((doc) => {
        res.json({ status: true, msg: "Document deleted" });
    }).catch((error) => {
        res.json({ status: false, msg: "Can't delete document" });
    })
}