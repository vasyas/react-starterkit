import * as chai from 'chai';

chai.config.includeStack = true; // for

global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;

// uncomment for running tests from browser
//var context = require.context('.', true, /.+\.test\.jsx?$/);
//context.keys().forEach(context);
//module.exports = context;
