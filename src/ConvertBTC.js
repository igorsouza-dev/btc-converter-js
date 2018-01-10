const request = require('request');

function convertBTC(currency = 'USD', amount = 1) {
  // return `${amount} BTC to ${currency} = 2000.00`;
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;
  request(url, (error, response, body) => {
    const apiResponse = JSON.parse(body);
    console.log(`${amount} BTC to ${currency} = ${apiResponse.price}`);
  });
}

module.exports = convertBTC;
