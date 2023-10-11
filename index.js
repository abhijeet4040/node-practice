require("./add") /* local export */
const subtract = require("./subtract") /* module exports */
const {multiply, divide } =  require("./math")
const resultSubtract = subtract(3,1)
console.log(resultSubtract)
console.log(multiply(2,3))
console.log(divide(4,2))