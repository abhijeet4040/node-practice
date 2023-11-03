const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const role = require('./models/role');
const user = require('./models/user');
global.app = app;
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

require('./database/dataSource')
require('./models/user')
require('./models/role')
require('./routes/user.routes')
require('./routes/role.routes')

app.listen(port, () => {
    console.log('listening on port ' + port)
})

