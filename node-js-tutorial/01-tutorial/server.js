// 1) Node runs on a server, not in a browser
console.log('Hello World');
// 2) global object instead of window object
console.log(global);
// 3) Has Common Core modules that we will explore
// 4) CommonJS modules instead of ES6 modules
const os = require('os');
const path = require('path');
const {add, subtract, multiply, divide } = require('./math');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

// 5) Missing some JS API's like fetch