const { Sequelize } = require("sequelize");
const config = require("../config.json");
var database = new Sequelize(config.db);

database
  .authenticate()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = database;
