const { createRoleController, getAllDataController, getAllDataRightController, getAllDataLeftController } = require("../controller/role.controller");

app.post('/createRole' , createRoleController );

app.get('/getAllData' , getAllDataController);

app.get('/getAllDataRight' , getAllDataRightController);

app.get('/getAllDataLeft' , getAllDataLeftController);