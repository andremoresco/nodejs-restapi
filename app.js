const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv/config');

const accountsRoute = require('./routes/accounts');

const app = express();

app.use(morgan('tiny'));

app.use('/accounts', accountsRoute);



mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser: true, useUnifiedTopology: true },
(err) => {
    if (err) {
        console.log('Err on loggin ' + err );

    } else {
        console.log('database logged in')
    }
});

app.listen(3000)