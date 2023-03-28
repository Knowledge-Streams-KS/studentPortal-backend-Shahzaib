const coursesService = require("../../Services/coursesService");
module.exports = async function (req, res) {
  const data = await coursesService.getCoursesbyId(req.query.ids);
  res.send(data);
};
