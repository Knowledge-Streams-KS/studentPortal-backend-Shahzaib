const { models } = require("../model/definition");
const { Op } = require("sequelize");
module.exports = {
  createUser: async function (body) {
    const result = await models.User.create(body);
    return result;
  },
  getUser: async function () {
    const result = await models.User.findAll({
      attributes: { exclude: ["password"] },
    });
    return result;
  },
  getUserbyId: async function (ids) {
    const result = await models.User.findAll({
      where: { id: ids },
      attributes: { exclude: ["password"] },
    });
    return result;
  },
  updateUser: async function (body) {
    const result = await models.User.update(
      {
        ...body,
      },
      {
        where: { id: body.id },
      }
    );
    return result;
  },
  removeUser: async function (ids) {
    const result = await models.User.destroy({
      where: { id: ids },
    });
    return result;
  },
  //validation
  getUserByAttribute: async function (body) {
    const result = await models.User.findAndCountAll({
      where: {
        [Op.or]: [
          {
            userName: body.userName,
          },
          { email: body.email },
          {
            phoneNumber: body.phoneNumber,
          },
        ],
      },
    });
    return result;
  },
};
