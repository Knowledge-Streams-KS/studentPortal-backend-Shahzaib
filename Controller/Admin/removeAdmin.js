const adminService = require("../../Services/adminService");
module.exports = async function (req, res) {
  const data = await adminService.removeAdmin(req.query.ids);
  res.send(data);
};
