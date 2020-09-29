const logger = require('./logger.js'); // definining it as a constat to prevent overwriting

console.log(logger); // printing the logger module definition, but not the function or variables

logger.printLog('algun mensaje'); // calling the module printLog
console.log(logger.endpoint); // printin the value of the variable endpoint

// console.log(module) // in node every file is a module, variables and functions defined in that file are scopred to that module

