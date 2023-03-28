const { createUser, getUser } = require("./userModel");
const { models } = require("../model/definition");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const User = require("./definition/User");

module.exports = {
  createTeacher: async function (body) {
    body.password = await bcrypt.hashSync(body.password, 10);
    var userCreate = {
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      email: body.email,
      role: body.role,
      phoneNumber: body.phoneNumber,
    };
    var teacherCreate = {
      teacherId: body.teacherId,
      department: body.department,
      officeLocation: body.officeLocation,
      startHours: body.startHours,
      endHours: body.endHours,
    };
    const user = await createUser(userCreate);
    teacherCreate = { ...teacherCreate, roleId: user.id };
    const result = await models.Teacher.create(teacherCreate);
    return result;
  },
  getTeacher: async function () {
    const result = await models.Teacher.findAll({
      include: { model: models.User },
      // attributes: { exclude: [`{}`] },
    });
    return result;
  },
  getTeacherbyId: async function (ids) {
    const result = await models.Teacher.findAll({
      where: { id: ids },
      attributes: { exclude: ["password"] },
      include: { model: models.User },
    });
    return result;
  },
  updateTeacher: async function (body) {
    const teacher = await models.Teacher.findByPk(body.id);
    let user = await teacher.getUser();
    await user.update({ ...body });
    await teacher.update({ ...body });
    return "teacher updated";
  },
  removeTeacher: async function (ids) {
    const teacher = await models.Teacher.findOne({
      where: { id: ids },
    });
    if (teacher) {
      await teacher.destroy();
      return "teacher deleted";
    }
  },
  //validation
  getTeacherByAttribute: async function (body) {
    const result = await models.Teacher.findAndCountAll({
      where: {
        [Op.or]: [
          {
            TeacherName: body.TeacherName,
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
