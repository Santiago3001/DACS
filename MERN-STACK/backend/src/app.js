const express = require ('express');
const app = express();
const cors = require('cors');


// settings
app.set('port', process.env.PORT  || 8080);  //mongoose.connect(process.env.MONGODB_URI || URI);

//middlewares
app.use(cors()); // dos servidores puedan intercambiar datos entre ellas back y front
app.use(express.json()); //me genera formato json

// app.use('/static', express.static(__dirname + '/frontend'));

//routes
app.use('/api/users', require('./routes/user'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;


