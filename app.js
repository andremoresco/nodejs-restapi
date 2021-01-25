const express = require('express');
const morgan = require('morgan');
require('./database/DbConnection')

const accountsRoute = require('./routes/AccountsRoute');
const earnsRoute = require('./routes/EarnsRoute');

const app = express();

app.use(morgan('tiny'));

app.use('/accounts', accountsRoute);
app.use('/earns', earnsRoute)

app.listen(3000)