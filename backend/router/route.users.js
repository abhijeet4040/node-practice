const { deleteUsersController, addUserController, updateUsersController, getUserController, } = require("../controller/Users.controller");



app.post("/add", addUserController);

app.put("/update/:id", updateUsersController);

app.delete( "/delete/:id", deleteUsersController);

app.get("/user", getUserController);



 