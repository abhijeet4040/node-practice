const { Sequelize } = require("sequelize");
const { DbConfig } = require("../configuration/db.config");


const {DATABASE, NAME , PASSWORD , HOST , DIALECT } = DbConfig;

const sequelize = new Sequelize(DATABASE, NAME, PASSWORD, {
  host : HOST,
  dialect : DIALECT,
});

// const setupDatabase = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Authenticated successfully");
//     try {
//       await sequelize.sync({ alter: true });
//       console.log("Synced successfully");
//     } catch (err) {
//       console.error("Error syncing", err);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

// setupDatabase();

sequelize
  .authenticate()
  .then(() => {
    console.log("Authenticated successfully");

    sequelize
      .sync({alter : true})
      .then(() => console.log("sync successful"))
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));

  
  

module.exports = sequelize;