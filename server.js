const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
db.once('open', () => console.log('mongoDB connection is Up and running...'));


const CommentsRoute = require('./routes/comments.routes');


app.use('/comments', CommentsRoute);


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

}


const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`listening on port ${port}`));
