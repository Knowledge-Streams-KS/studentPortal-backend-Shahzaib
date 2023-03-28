const coursesService = require("../../Services/coursesService");
module.exports = async function (req, res) {
  const data = await coursesService.updateCourses(req.body);
  res.send(data);
};
