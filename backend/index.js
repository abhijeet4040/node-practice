const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const cors= require('cors');
const bodyParser = require('body-parser');
const Users = require('./models/Users.model');
global.app = app;
const port = 3000;

app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));

require('./database/dataSource');
require('./models/Users.model');
require('./router/route.users');

app.listen(port , () => {
  console.log("Listening on port " + port);
});


