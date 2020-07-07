const Sequelize = require("sequelize");

module.exports = sequelize.define("Users", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(25),
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING(25),
    allowNull: false,
  },
});
