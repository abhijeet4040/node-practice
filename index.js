const express = require('express');
const app = express();
const port = 3000;
const crypto = require('crypto');

// const algorithm = 'aes-256-cbc';
// const key = 'anything';
// const iv = crypto.randomBytes(16);

// const cipher = crypto.createCipheriv(algorithm, key, iv);

app.get('/', (req, res) => {
    res.send('Hello world!');
});
 app.listen(port, ()=> {
    console.log('server is running on port ' + port);
 } )



