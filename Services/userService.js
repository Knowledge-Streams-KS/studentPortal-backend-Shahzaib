const userModel = require("../model/userModel");
module.exports = {
  createUser: async function (body) {
    const data = await userModel.createUser(body);
    return data;
  },
  getUser: async function () {
    const data = await userModel.getUser();
    return data;
  },
  getUserbyId: async function (ids) {
    const data = await userModel.getUserbyId(ids);
    return data;
  },
  updateUser: async function (body) {
    const data = await userModel.updateUser(body);
    return data;
  },
  removeUser: async function (ids) {
    const data = await userModel.removeUser(ids);
    return data;
  },
};
