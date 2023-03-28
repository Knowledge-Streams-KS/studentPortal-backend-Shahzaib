const coursesService = require("../../Services/coursesService");
module.exports = async function (req, res) {
  const data = await coursesService.removeCourses(req.query.ids);
  res.send(data);
};
