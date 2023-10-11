const fs = require("fs");

// fs.mkdirSync("Menu");

// fs.writeFileSync("Menu/foodItems.txt", "vegetables meat drinks")

// fs.writeFileSync("Menu/foodItems.txt", " dessert " , { flag: "a" } )

// fs.appendFileSync("Menu/foodItems.txt", " appetizers " )

const data = fs.readFileSync("Menu/foodItems.txt", "utf-8")
console.log(data)

// fs.renameSync("Menu/foodItems.txt", "Menu/menuItems.txt")

// fs.unlink("Menu/menuItems.txt")

// fs.rmdirSync("Menu")

