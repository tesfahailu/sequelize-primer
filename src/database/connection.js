const Sequelize = require("sequelize");
const sequelize = new Sequelize("database-name", "username", "password", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => console.log("Data base connected..."))
  .catch((err) => console.log("Error", err));

module.exports = sequelize;
global.sequelize = sequelize;
