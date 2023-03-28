const { Sequelize, DataTypes, Model } = require("sequelize");
let sequelize = require("../../common/dbConnection");
const User = require("./User");

class Admin extends Model {}
Admin.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    adminId: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
    },
    designation: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(),
    },
  },
  {
    timesstamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Admin",
    hooks: {
      afterDestroy: function (instance) {
        instance.getUser().then((User) => User.destroy());
        console.log("after destroy:destroyed");
      },
    },
  }
);

module.exports = Admin;
