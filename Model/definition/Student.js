const { Sequelize, DataTypes, Model } = require("sequelize");
let sequelize = require("../../common/dbConnection");
const User = require("./User");
class Student extends Model {}
Student.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    registrationNumber: {
      unique: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    department: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    semesterNumber: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timesstamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Student",
    hooks: {
      afterDestroy: function (instance) {
        instance.getUser().then((User) => User.destroy());
        console.log("after destroy:destroyed");
      },
    },
  }
);

module.exports = Student;
