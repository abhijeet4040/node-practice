const express = require("express");
const http = require("http");
const fs = require("fs");
const app = express();
app.use(express.json())
const port = 3000;


app.get("/video", (req, res) => {
  const videoUrl = "http://media.istockphoto.com/id/1407324483/video/abstract-digital-grids-wire-frame-dots-blue-loop-background.mp4?s=mp4-640x640-is&k=20&c=26GOwfuXX9wUccr0Rm1QqDLA08RiDYF-fyVA2_U1m28="; 
// const videoUrl = "https://pixabay.com/videos/search/animated/"
const filePath = "video1.mp4";

  const fileStream = fs.createWriteStream(filePath);

  http.get(videoUrl, (videoResponse) => {
    if (videoResponse.statusCode === 200) {
      videoResponse.pipe(fileStream);
      fileStream.on("finish", () => {
        res.send("Video download complete.");
      });
    } else {
      console.error("Video download error: " + videoResponse.statusCode);
      res.status(videoResponse.statusCode).end();
    }
  }).on("error", (error) => {
    console.error("Video download error: " + error.message);
    res.status(500).end();
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
