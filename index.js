const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({ dest: "./images" });

app.post("/", upload.single("file"), (req, res) => {
   const name = req.file.encoding
   console.log(name)
    console.log(req.file);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
