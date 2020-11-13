/* eslint-disable max-len */
const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 90000;

const chai = require('chai');

exports.config = {
  // uncomment here if you want to use Selenoid env, but please make sure turn on the Selenoid
  hostname: 'localhost',
  port: 4003,

  specs: [
    './test/features/*.feature',
    './test/features/*/*.feature'
  ] }
