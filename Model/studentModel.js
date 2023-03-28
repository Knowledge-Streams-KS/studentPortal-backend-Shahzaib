const { createUser } = require("./userModel");
const { models } = require("../model/definition");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = {
  createStudent: async function (body) {
    body.password = await bcrypt.hashSync(body.password, 10);
    var userCreate = {
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      email: body.email,
      role: body.role,
      phoneNumber: body.phoneNumber,
    };
    var studentCreate = {
      registrationNumber: body.registrationNumber,
      department: body.department,
      semesterNumber: body.semesterNumber,
    };
    const user = await createUser(userCreate);
    studentCreate = { ...studentCreate, roleId: user.id };
    const result = await models.Student.create(studentCreate);
    return result;
  },
  getStudent: async function () {
    const result = await models.Student.findAll({
      include: { model: models.User },
      // attributes: { exclude: [`{}`] },
    });
    return result;
  },
  getStudentbyId: async function (ids) {
    const result = await models.Student.findAll({
      where: { id: ids },
      attributes: { exclude: ["password"] },
      include: { model: models.User },
    });
    return result;
  },
  updateStudent: async function (body) {
    const student = await models.Student.findByPk(body.id);
    let user = await student.getUser();
    await user.update({ ...body });
    await student.update({ ...body });
    return "student updated";
  },
  removeStudent: async function (ids) {
    const student = await models.Student.findOne({
      where: { id: ids },
    });
    if (student) {
      await student.destroy();
      return "Student deleted";
    }
    return result;
  },
  //validation
  getStudentByAttribute: async function (body) {
    const result = await models.Student.findAndCountAll({
      where: {
        [Op.or]: [
          {
            StudentName: body.StudentName,
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
