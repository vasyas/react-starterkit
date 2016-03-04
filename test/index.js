import * as chai from 'chai';

chai.config.includeStack = true; // for

global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;

// export module for running within webpack
if (typeof __webpack_require__ === 'function') {
    let context = require.context('.', true, /.+\.test\.jsx?$/);
    context.keys().forEach(context);
    module.exports = context;
}
