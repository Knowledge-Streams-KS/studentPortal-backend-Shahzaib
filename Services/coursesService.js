const bcrypt = require("bcrypt");
const CoursesModel = require("../model/coursesModel");
module.exports = {
  createCourses: async function (body) {
    const data = await CoursesModel.createCourses(body);
    return data;
  },
  getCourses: async function () {
    const data = await CoursesModel.getCourses();
    return data;
  },
  getCoursesbyId: async function (ids) {
    const data = await CoursesModel.getCoursesbyId(ids);
    return data;
  },
  updateCourses: async function (body) {
    const data = await CoursesModel.updateCourses(body);
    return data;
  },
  removeCourses: async function (ids) {
    const data = await CoursesModel.removeCourses(ids);
    return data;
  },
};
