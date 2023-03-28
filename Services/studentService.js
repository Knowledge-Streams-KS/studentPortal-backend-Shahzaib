const bcrypt = require("bcrypt");
const StudentModel = require("../model/studentModel");
module.exports = {
  createStudent: async function (body) {
    const data = await StudentModel.createStudent(body);
    return data;
  },
  getStudent: async function () {
    const data = await StudentModel.getStudent();
    return data;
  },
  getStudentbyId: async function (ids) {
    const data = await StudentModel.getStudentbyId(ids);
    return data;
  },
  updateStudent: async function (body) {
    const data = await StudentModel.updateStudent(body);
    return data;
  },
  removeStudent: async function (ids) {
    const data = await StudentModel.removeStudent(ids);
    return data;
  },
};
