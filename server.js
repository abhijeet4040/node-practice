const bodyParser = require('body-parser');
const express = require('express');
const sendEmail = require('.');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.listen(port , () => {
    console.log( 'listening on port ' + port ); 
})

app.get('/', sendEmail);