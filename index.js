'use strict';

//The primary issue handle, returns a function set up with the type of issue it's handling
function handleException(stopExecution) {
    return function(error) {
        console.log(`${error.__proto__}: ${error.message}`);

        //Halt process if necessary
        if (stopExecution) {
            console.log(`Halting Execution`);
            process.exit(1);
        };
    }
}

//The setup function that accepts the initial options and sets up handlers
function tcr(stopExecution) {
    process.on('uncaughtException', handleException(stopExecution || true));
}

module.exports = tcr;