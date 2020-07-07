const Sequelize = require("sequelize");

module.exports = sequelize.define("Messages", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  content: Sequelize.STRING(300),
});
