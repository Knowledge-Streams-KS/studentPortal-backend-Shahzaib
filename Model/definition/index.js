const Sequelize = require("sequelize");
var config = require("../../config.json");
config = config.db;
const db = {};
let sequelize = require("../../common/dbConnection");
const User = require("../definition/User");
const Student = require("../definition/Student");
const Teacher = require("../definition/Teacher");
const Admin = require("../definition/Admin");
const Courses = require("../definition/Courses");
let section = sequelize.define("Section", {});
//user-student
User.hasOne(Student, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: "roleId",
});
Student.belongsTo(User, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: "roleId",
});

//user-Teacher
User.hasOne(Teacher, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: "roleId",
});
Teacher.belongsTo(User, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: "roleId",
});

//user-Admin
User.hasOne(Admin, { onDelete: "CASCADE", hooks: true, foreignKey: "roleId" });
Admin.belongsTo(User, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: "roleId",
});

Teacher.belongsToMany(Courses, { through: section });
Courses.belongsToMany(Teacher, { through: section });

// let section = sequelize.models.section;
Student.hasMany(section, { foreignKey: "StudentID" });
section.belongsTo(Student, { foreignKey: "StudentID" });

const models = {
  User,
  Student,
  Teacher,
  Admin,
  Courses,
  section,
};
console.log(models);
sequelize.models = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db, models };
