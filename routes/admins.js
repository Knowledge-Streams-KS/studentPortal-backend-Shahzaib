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
  createAdmin,
  getAdmin,
  getAdminbyId,
  updateAdmin,
  removeAdmin,
} = require("../Controller/index");

router.post("/createAdmin", createAdmin);
router.get("/getAdmin", getAdmin);
router.get("/getAdminbyId", getAdminbyId);
router.put("/updateAdmin", updateAdmin);
router.delete("/removeAdmin", removeAdmin);

module.exports = router;
