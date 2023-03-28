var express = require("express");
var router = express.Router();
// const jwt = require("jsonwebtoken");
// const jwtSecret = require("../config.json");

// async function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(401);
//   jwt.verify(token, jwtSecret.jwt.secret, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }
const {
  createStudent,
  getStudent,
  getStudentbyId,
  updateStudent,
  removeStudent,
} = require("../Controller/index");

router.post("/createStudent", createStudent);
router.get("/getStudent", getStudent);
router.get("/getStudentbyId", getStudentbyId);
router.put("/updateStudent", updateStudent);
router.delete("/removeStudent", removeStudent);

module.exports = router;
