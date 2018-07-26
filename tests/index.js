const Mocha = require('mocha');
var supertest = require('supertest');
var chai = require('chai');
const path = require('path');
chai.should();
var app = require('../server.js');

const mocha = new Mocha({
  timeout: 30000
});

const testFiles = [
  'get.js',
]

testFiles.forEach(file => {
  mocha.addFile(`${__dirname}/${file}`);
});

// Run the tests.
mocha.run().on('end', () => {

  process.stdout.write('Tests complete\n');
  process.exit(0);
});