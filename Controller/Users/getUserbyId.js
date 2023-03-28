const userService = require("../../Services/userService");
module.exports = async function (req, res) {
  const data = await userService.getUserbyId(req.query.ids);
  res.send(data);
};
