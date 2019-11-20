const app = require('express')();
//const http = require('http').Server(app);
//const io = require('socket.io')(http);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/database');
const newsRouter = require('./router/newsRouter');
const contactRouter = require('./router/contactRouter.js');
const cors = require('cors');


const port = 2000;

mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connection.on('connected', () => { console.log('connected') });
mongoose.connection.on('error', (error) => { console.log('connection to database:' + error) });

/*io.on("connection", socket => {
    let previousId;
    const safeJoin = currentId => {
        socket.leave(previousId);
        socket.join(currentId);
        previousId = currentId;
    };

    socket.on("getDoc", docId => {
        safeJoin(docId);
        socket.emit("config.database", documents[docId]);
    });

    socket.on("addDoc", doc => {
        documents[doc.id] = doc;
        safeJoin(doc.id);
        io.emit("documents", Object.keys(documents));
        socket.emit("config.database", doc);
    });

    socket.on("editDoc", doc => {
        documents[doc.id] = doc;
        socket.to(doc.id).emit("config.database", doc);
    });

    io.emit("config.database", Object.keys(documents));
});*/

app.use(cors());

app.use(bodyParser.json());

app.use('/newsfeed', newsRouter);
app.use('/contact', contactRouter);

app.listen(port, () => {
    console.log("server started on port 2000");
});