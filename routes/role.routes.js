const { createRoleController, getAllDataController, getAllDataRightController, getAllDataLeftController } = require("../controller/role.controller");

app.post('/createRole' , createRoleController );

app.post('/getAllData' , getAllDataController);

app.post('getAllDataRight' , getAllDataRightController);

app.post('getAllDataLeft' , getAllDataLeftController);