const AdminService = require("../../Services/adminService");
module.exports = async function (req, res) {
  const data = await AdminService.getAdmin(req.body);
  res.send(data);
};
