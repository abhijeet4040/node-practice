const fs = require("node:fs/promises")

fs.mkdir("Customers")
.then(console.log("folder made successfully"))
.catch((err) => console.error(err))

fs.writeFile("Customers/name.txt", "Abhijeet",)
.then(console.log("file has been created"))
.catch((err) => console.log(err))

fs.readFile("Customers/name.txt", "utf-8")
.then( (data) => console.log(data))
.catch( (err) => console.log(err))