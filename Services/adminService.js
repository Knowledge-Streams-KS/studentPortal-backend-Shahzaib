const bcrypt = require("bcrypt");
const adminModel = require("../model/adminModel");
module.exports = {
  createAdmin: async function (body) {
    const data = await adminModel.createAdmin(body);
    return data;
  },
  getAdmin: async function () {
    const data = await adminModel.getAdmin();
    return data;
  },
  getAdminbyId: async function (ids) {
    const data = await adminModel.getAdminbyId(ids);
    return data;
  },
  updateAdmin: async function (body) {
    const data = await adminModel.updateAdmin(body);
    return data;
  },
  removeAdmin: async function (ids) {
    const data = await adminModel.removeAdmin(ids);
    return data;
  },
};
