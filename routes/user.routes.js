const { createUserController, deleteUserController, updateUserController, getUserController } = require("../controller/user.controller");
const { authUserMiddleware } = require("../middleware/user.validate");

app.post('/createUser', createUserController);

app.delete('/deleteUser/:id',authUserMiddleware, deleteUserController);

app.put('/updateUser/:id',  authUserMiddleware,updateUserController);

app.get('/getUser' , getUserController);    

