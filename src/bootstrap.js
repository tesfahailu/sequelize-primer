module.exports = async () => {
  const Message = require("./models/Message");
  const User = require("./models/User");

  User.hasMany(Message, { as: "Messages", foreignKey: "userId" });
  Message.belongsTo(User, { as: "Users", foreignKey: "userId" });

  const errorHandler = (err) => {
    console.error(err);
  };

  const user = await User.upsert({
    username: "tesfah",
    password: "123456",
  }).catch(errorHandler);

  const message = await Message.upsert({
    content: "This is a message",
    userId: user.id,
  }).catch(errorHandler);

  const users = await User.findAll({
    where: { username: "tesfah" },
    include: [{ model: Message, as: "Messages" }],
  }).catch(errorHandler);

  console.log(users);
};
