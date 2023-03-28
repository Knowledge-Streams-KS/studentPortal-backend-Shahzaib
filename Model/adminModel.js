const { createUser } = require("./userModel");
const { models } = require("../model/definition");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = {
  createAdmin: async function (body) {
    body.password = await bcrypt.hashSync(body.password, 10);
    var userCreate = {
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      email: body.email,
      role: body.role,
      phoneNumber: body.phoneNumber,
    };
    var adminCreate = {
      adminId: body.adminId,
      designation: body.designation,
    };
    const user = await createUser(userCreate);
    adminCreate = { ...adminCreate, roleId: user.id };
    const result = await models.Admin.create(adminCreate);
    return result;
  },
  getAdmin: async function () {
    const result = await models.Admin.findAll({
      include: { model: models.User },
      // attributes: { exclude: [`{}`] },
    });
    return result;
  },
  getAdminbyId: async function (ids) {
    const result = await models.Admin.findAll({
      where: { id: ids },
      attributes: { exclude: ["password"] },
      include: { model: models.User },
    });
    return result;
  },
  updateAdmin: async function (body) {
    const admin = await models.Admin.findByPk(body.id);
    let user = await admin.getUser();
    await user.update({ ...body });
    await admin.update({ ...body });
    return "Admin updated";
  },
  removeAdmin: async function (ids) {
    const admin = await models.Admin.findOne({
      where: { id: ids },
    });
    if (admin) {
      await admin.destroy();
      return "Admin deleted";
    }
    return result;
  },
  //validation
  getAdminByAttribute: async function (body) {
    const result = await models.Admin.findAndCountAll({
      where: {
        [Op.or]: [
          {
            AdminName: body.AdminName,
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
