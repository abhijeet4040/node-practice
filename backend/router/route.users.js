const {getAllUsersController, deleteUsersController, addUserController, paginationController, } = require("../controller/Users.controller");

app.get("/users", getAllUsersController);

app.post("/add", addUserController);

// app.put("/update", updateUsersController);

app.delete( "/delete/:id", deleteUsersController);

app.get("/page", paginationController);



 