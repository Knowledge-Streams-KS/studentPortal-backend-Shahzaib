module.exports = {
  //users
  createUser: require("./Users/createUser"),
  getUser: require("./Users/getUser"),
  getUserbyId: require("./Users/getUserbyId"),
  updateUser: require("./Users/updateUser"),
  removeUser: require("./Users/removeUser"),
  //admin
  createAdmin: require("./Admin/createAdmin"),
  getAdmin: require("./Admin/getAdmin"),
  getAdminbyId: require("./Admin/getAdminbyId"),
  updateAdmin: require("./Admin/updateAdmin"),
  removeAdmin: require("./Admin/removeAdmin"),
  //student
  createStudent: require("./Student/createStudent"),
  getStudent: require("./Student/getStudent"),
  getStudentbyId: require("./Student/getStudentbyId"),
  updateStudent: require("./Student/updateStudent"),
  removeStudent: require("./Student/removeStudent"),
  //teacher
  createTeacher: require("./Teacher/createTeacher"),
  getTeacher: require("./Teacher/getTeacher"),
  getTeacherbyId: require("./Teacher/getTeacherbyId"),
  updateTeacher: require("./Teacher/updateTeacher"),
  removeTeacher: require("./Teacher/removeTeacher"),
  //courses
  createCourses: require("./Courses/createCourses"),
  getCourses: require("./Courses/getCourses"),
  getCoursesbyId: require("./Courses/getCoursesbyId"),
  updateCourses: require("./Courses/updateCourses"),
  removeCourses: require("./Courses/removeCourses"),
  //common
};
