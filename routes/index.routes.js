const router = require("express").Router();
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const classRoutes = require("./class.routes");
/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});
router.use("/", authRoutes);
router.use("/", userRoutes);
router.use("/", classRoutes);
module.exports = router;
