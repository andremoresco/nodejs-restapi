const axios = require('axios');

test.only('Should get balance', async function () {

    const balance = await axios({
        url: 'http://localhost:3000/balance',
        method: 'get'
    });

    console.log(balance.data);

});