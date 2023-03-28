const teacherService = require("../../Services/teacherService");
module.exports = async function (req, res) {
  const data = await teacherService.removeTeacher(req.query.ids);
  res.send(data);
};
