import * as chai from 'chai';

chai.config.includeStack = true; // for

global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;

// comment for running tests from nodejs
//var context = require.context('.', true, /.+\.test\.jsx?$/);
//context.keys().forEach(context);
//module.exports = context;
