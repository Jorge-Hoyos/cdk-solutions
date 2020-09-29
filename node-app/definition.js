function sayHello(name) {
  console.log('Hello ' + name);
}

sayHello('Jorge');
console.log(module); // global, un print

// setTimeout();
// clearTimeout();

// setIntervarl();
// clearInterval();

// global.console.log
// console.setIntervarl

var message = 'Hello'; //not added to the global object, not available outside of the file
console.log(global.message)
// global.console.setIntervarl