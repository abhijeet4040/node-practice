const express = require('express');
const app = express();
const port = 3000;
const crypto = require('crypto');
const { json } = require('body-parser');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


app.use(express.json());

app.post('/cipher-password', (req, res) => {
    const { text } = req.body;
    
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    let encryptedPassword = cipher.update(text, 'utf-8', 'hex')  

    encryptedPassword += cipher.final('hex') 
    console.log(encryptedPassword)
    res.json({ "text" : encryptedPassword,
"key":key,
"iv":iv 
})

 
});

app.post('/decipher-password', (req, res) => {
    let { text,key,iv } = req.body;
    key=Buffer.from(key,'hex')
    iv=Buffer.from(iv,'hex')
    const decipher = crypto.createDecipheriv(algorithm, key, iv)
    
    let decryptedPassword = decipher.update(text, 'hex', 'utf-8')
    
    decryptedPassword += decipher.final('utf-8');
    console.log(decryptedPassword)
    res.send({text: decryptedPassword})
})

app.listen(port, () => {
    console.log('Server is running on port ' + port);
}); 


