var url = 'https://mylogger.io/log';
var key = '123pass';

function printLog(message) {
  // send an http request
  console.log(message);
}

module.exports.printLog = printLog; // exports a single function
module.exports.endpoint = url; //only exports url and not key
// module.exports = printLog; // exports an object


// console.log(module)