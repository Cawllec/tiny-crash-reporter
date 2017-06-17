'use strict';

//Require the module
const TinyCrashReporter = require('./index');

//Initiate the module
//Module accepts a boolean on whether to stop execution on expception, defaults to true
TinyCrashReporter(true);

//If an error occurs, crash reporter will catch and log it
someMissingObject.someMissingFunction();

console.log(`This code shouldn't execute`);