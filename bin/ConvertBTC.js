'use strict';

var chalk = require('chalk');
var request = require('request');
var ora = require('ora');

var spinner = ora({
  text: 'Retrieving bitcoin data...',
  color: 'yellow'
});

function convertBTC() {
  var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var url = 'https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=' + currency + '&amount=' + amount;

  spinner.start();
  request(url, function (error, response, body) {
    spinner.stop();
    var apiResponse = void 0;

    try {
      apiResponse = JSON.parse(body);
    } catch (parseError) {
      console.log(chalk.red('Something went wrong with the api, try again in a few minutes'));
      return parseError;
    }
    console.log(chalk.red(amount) + ' BTC to ' + chalk.cyan(currency) + ' = ' + chalk.yellow(apiResponse.price));
  });
}

module.exports = convertBTC;