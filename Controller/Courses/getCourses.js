const coursesService = require("../../Services/coursesService");
module.exports = async function (req, res) {
  const data = await coursesService.getCourses(req.body);
  res.send(data);
};
