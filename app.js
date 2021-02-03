const express = require('express');
const morgan = require('morgan');
require('./database/DbConnection')

const accountsRoute = require('./routes/AccountsRoute');
const incomesRoute = require('./routes/IncomesRoute');
const transactionsRoute = require('./routes/TransactionsRoute');
const expensesRoute = require('./routes/ExpensesRoute');
const balanceRoute = require('./routes/BalanceRoute');


const app = express();

app.use(morgan('tiny'));

app.use('/accounts', accountsRoute);
app.use('/incomes', incomesRoute)
app.use('/transactions', transactionsRoute);
app.use('/expenses', expensesRoute);
app.use('/balance', balanceRoute);

app.listen(3000)