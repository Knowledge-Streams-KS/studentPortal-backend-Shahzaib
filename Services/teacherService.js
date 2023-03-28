const bcrypt = require("bcrypt");
const TeacherModel = require("../model/teacherModel");
module.exports = {
  createTeacher: async function (body) {
    const data = await TeacherModel.createTeacher(body);
    return data;
  },
  getTeacher: async function () {
    const data = await TeacherModel.getTeacher();
    return data;
  },
  getTeacherbyId: async function (ids) {
    const data = await TeacherModel.getTeacherbyId(ids);
    return data;
  },
  updateTeacher: async function (body) {
    const data = await TeacherModel.updateTeacher(body);
    return data;
  },
  removeTeacher: async function (ids) {
    const data = await TeacherModel.removeTeacher(ids);
    return data;
  },
};
