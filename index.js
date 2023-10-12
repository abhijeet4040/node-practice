const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const { timeStamp } = require("console");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// const upload = multer({ dest: "./images" });

app.post("/", multer().single("file"), (req, res) => {
  console.log(req.file);

  const timeStamp = Date.now();
  // const newFileName = `${timestamp}_${req.file.originalname}`
  const fileName = req.file.originalname
  const newPath = `./images/${timeStamp}${fileName}`;
  fs.writeFileSync(newPath, req.file.buffer)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
