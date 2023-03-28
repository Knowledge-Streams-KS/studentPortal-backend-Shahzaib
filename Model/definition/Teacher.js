const { Sequelize, DataTypes, Model } = require("sequelize");
let sequelize = require("../../common/dbConnection");
const User = require("./User");
class Teacher extends Model {}
Teacher.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    teacherId: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
    },
    department: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    officeLocation: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    startHours: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    endHours: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
  },
  {
    timesstamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Teacher",
    hooks: {
      afterDestroy: function (instance) {
        instance.getUser().then((User) => User.destroy());
        console.log("after destroy:destroyed");
      },
    },
  }
);

module.exports = Teacher;
