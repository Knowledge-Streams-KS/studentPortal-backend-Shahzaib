const { Sequelize, DataTypes, Model } = require("sequelize");
let sequelize = require("../../common/dbConnection");

class Courses extends Model {}
Courses.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    courseCode: {
      unique: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    courseTitle: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    creditHours: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    Lab: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timesstamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Courses",
  }
);

module.exports = Courses;
