Micro-library for handling uncaught exceptions for [node](http://nodejs.org)

## Installation

```bash
$ npm install tiny-crash-reporter
```

## Usage

TinyCrashReporter consists of a single API call with a single boolean option.
Simple require the module into your code and execute the modules function.
```js
const TinyCrashReporter = require('tiny-crash-reporter');

TinyCrashReporter();
```
This initialises the module and will start it handling your uncaught exceptions.

TinyCrashReporter accepts one argument:
  ```js stopExcecution```: Tells the module to end the process when an exceptions is handled.  Default: true

## Examples

  The libraries functionality is demonstrated in the example.js file found in the node_modules folder