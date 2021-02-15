require('dotenv/config');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', function () {  
  console.log(`Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`);
});

mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});