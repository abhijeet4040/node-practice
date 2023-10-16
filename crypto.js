const crypto = require('crypto');

// Hmac()



// const secret = "SecretKey123";
// const hmac = crypto.createHmac('sha256' , secret)

// const data = 'Hello world'
// hmac.update(data)

// const receivedHmac = "someReceivedHmac";
// const computedHmac = hmac.digest('hex');

// if (receivedHmac === computedHmac) {
//     console.log('Data is authentic and unaltered.')
// } else {
//     console.log('Data may have been tampered with')
// }



// crypto.createDecipheriv()



// let crypto;
// try{
//     crypto = require('node:crypto');
// } catch (err) {
//     console.error('crypto support is disabled!')
// }

// const algorithm = 'aes-256-cbc';
// const key = 'your-secret-key';
// const iv = crypto.randomBytes(16);

// const cipher = crypto.createCipheriv(algorithm, key, iv);

// let encryptedData = cipher.update('Hello, World!', 'utf-8' , 'hex');
// encryptedData += cipher.final('hex')

// console.log('encryptedData: ', encryptedData)



// crypto.createDecipheriv



// function createDecipheriv(algorithm, key, iv) {
//     return crypto.createDecipheriv(algorithm, key, iv);
// }

// const algorithm = 'aes-128-cbc';
// const key = 'SecretKey';
// const iv = crypto.randomBytes(16).toString

// const cipherText= 'f847ab0e69ffca8b2a171f9a730fd3ae';

// const Decipher = createDecipheriv(algorithm, key, iv);

// const decipheredText = decipher.update(cipherText,'hex', 'uft8');

// console.log(decipheredText)















