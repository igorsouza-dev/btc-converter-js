import { expect } from 'chai';
import { exec } from 'child_process';

const pkg = require('../package.json');

const btcConverter = './src/main.js';

describe('Main CLI', () => {
  it('should return version', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });
  it('should return description when help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes(pkg.description)).to.be.true;
      done();
    });
  });
  it('should return the currency option when help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });
  it('should return the amount option when help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes('--amount')).to.be.true;
      done();
    });
  });
});
