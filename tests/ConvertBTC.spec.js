const nock = require('nock');

const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const convertBTC = require('../src/ConvertBTC');

chai.use(sinonChai);

describe('ConvertBTC', () => {
  let consoleStub;

  const responseMock = {
    time: '2018-01-10 14:29:56',
    price: 13882.78,
    success: true,
  };

  beforeEach(() => {
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('should return USD as currency and 1 as amount by default', (done) => {
    // expect(convertBTC()).to.be.equal('1 BTC to USD = 2000.00');
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'USD', amount: 1 })
      .reply(200, responseMock);

    convertBTC();

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('1 BTC to USD = 13882.78');
      done();
    }, 300);
  });

  it('should return USD as currency and 10 as amount', (done) => {
    // expect(convertBTC()).to.be.equal('1 BTC to USD = 2000.00');
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'USD', amount: 10 })
      .reply(200, responseMock);

    convertBTC('USD', 10);

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('10 BTC to USD = 13882.78');
      done();
    }, 300);
  });
});
