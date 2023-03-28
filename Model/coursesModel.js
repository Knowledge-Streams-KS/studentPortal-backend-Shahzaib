const { models } = require("../model/definition");
const { Op } = require("sequelize");
module.exports = {
  createCourses: async function (body) {
    const result = await models.Courses.create(body);
    return result;
  },
  getCourses: async function () {
    const result = await models.Courses.findAll();
    return result;
  },
  getCoursesbyId: async function (ids) {
    const result = await models.Courses.findAll({
      where: { id: ids },
    });
    return result;
  },
  updateCourses: async function (body) {
    const result = await models.Courses.update(
      {
        ...body,
      },
      {
        where: { id: body.id },
      }
    );
    return result;
  },
  removeCourses: async function (ids) {
    const result = await models.Courses.destroy({
      where: { id: ids },
    });
    return result;
  },
  //validation
  getCoursesByAttribute: async function (body) {
    const result = await models.Courses.findAndCountAll({
      where: {
        [Op.or]: [
          {
            CoursesName: body.CoursesName,
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
