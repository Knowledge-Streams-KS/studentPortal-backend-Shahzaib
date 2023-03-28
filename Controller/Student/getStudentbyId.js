const studentService = require("../../Services/studentService");
module.exports = async function (req, res) {
  const data = await studentService.getStudentbyId(req.query.ids);
  res.send(data);
};
