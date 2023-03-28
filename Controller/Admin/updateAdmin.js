const adminService = require("../../Services/adminService");
module.exports = async function (req, res) {
  const data = await adminService.updateAdmin(req.body);
  res.send(data);
};
