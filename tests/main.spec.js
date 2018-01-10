import { expect } from 'chai';

describe('Main', () => {
  it('should ', () => {
    expect(true).to.be.true;
  });
  it('should', () => {
    expect(false).to.be.false;
  });
});
{
  "name": "btc-converter-ims",
  "version": "1.0.0",
  "description": "A CLI to convert Bitcon to any currency provided",
  "main": "main.js",
  "scripts": {
    "clear": "rimraf bin",
    "build": "npm run clear && ./node_modules/.bin/babel --out-dir bin src",
    "build:watch": "npm run build -- --watch",
    "lint": "./node_modules/.bin/eslint src/*js",
    "prepush": "npm run lint && npm run test:coverage",
    "test": "./node_modules/.bin/mocha tests/**/*.spec.js --require babel-register --reporter nyan",
    "test:tdd": "npm run test -- --watch",
    "test:coverage": "nyc npm test"
  },
  "preferGlobal": true,
  "bin": {
    "btc-converter-ims": "bin/main.js"
  },
  "nyc": {
    "functions": 80,
    "lines": 80,
    "check-coverage": false,
    "reporter": [
      "text",
      "html"
    ],
    "exclude": [
      "tests/**"
    ]
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/havok1305/btc-converter-ims.git"
  },
  "keywords": [
    "js",
    "tdd"
  ],
  "author": "Igor Martins <havok1305@gmail.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/havok1305/btc-converter-ims/issues"
  },
  "homepage": "https://github.com/havok1305/curso-js-tdd#readme",
  "devDependencies": {
    "babel-preset-env": "^1.6.1",
    "babel-register": "^6.26.0",
    "chai": "^4.1.2",
    "eslint": "^4.13.1",
    "eslint-config-airbnb-base": "^12.1.0",
    "eslint-plugin-import": "^2.8.0",
    "husky": "^0.14.3",
    "mocha": "^4.0.1",
    "nyc": "^11.4.1"
  },
  "dependencies": {
    "ramda": "^0.25.0"
  }
}
