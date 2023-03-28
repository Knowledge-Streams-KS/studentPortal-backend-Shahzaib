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
  createTeacher,
  getTeacher,
  getTeacherbyId,
  updateTeacher,
  removeTeacher,
} = require("../Controller/index");

router.post("/createTeacher", createTeacher);
router.get("/getTeacher", getTeacher);
router.get("/getTeacherbyId", getTeacherbyId);
router.put("/updateTeacher", updateTeacher);
router.delete("/removeTeacher", removeTeacher);

module.exports = router;
