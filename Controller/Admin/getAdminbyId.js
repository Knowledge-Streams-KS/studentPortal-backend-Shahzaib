const AdminService = require("../../Services/adminService");
module.exports = async function (req, res) {
  const data = await AdminService.getAdminbyId(req.query.ids);
  res.send(data);
};
