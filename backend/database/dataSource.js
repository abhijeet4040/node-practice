const {Sequelize} = require('sequelize');
const DbConfig = require('../configuration/db.config');

 const sequelize = new Sequelize(DbConfig.DATABASE , DbConfig.NAME , DbConfig.PASSWORD, {
    host: DbConfig.HOST,
    dialect : DbConfig.DIALECT,
});


sequelize.authenticate()
.then(() => {
    console.log('Authentication successful');

    sequelize.sync( { alter: true } )
    .then(() => {
        console.log('Authentication successful');
    }).catch((err) => {
        console.error(err);
    })

}).catch((err)=> {
    console.error('Authentication failed', err);
})

module.exports = sequelize;




