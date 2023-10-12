const os = require('os');

console.log("platform: " + os.platform());
console.log("Architecture: " + os.arch())

console.log("Free memory: " + os.freemem())
console.log("hostname: " + os.hostname())

console.log("load avg: " + os.loadavg())

console.log("release: " + os.release())

console.log("total memory: " + os.totalmem())

console.log("up time: " + os.uptime())

console.log("user info: " + os.userInfo().username)