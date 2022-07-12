const router = require("express").Router();
const fileUploader = require("../config/cloudinary.config");
const User = require("../models/User.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const { populate } = require("../models/User.model");

router.get("/user", isAuthenticated, (req, res, next) => {
  User.find()
    .populate("classes")
    .then((response) => res.status(200).json(response))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "User not found!!" });
    });
});

router.get("/user/:id", isAuthenticated, (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .populate("classes")
    .then((response) => res.status(200).json(response))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "User not found!!" });
    });
});
// POST "/upload" => Route that receives the image, sends it to Cloudinary via the fileUploader and returns the image URL
router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
  console.log("file is: ", req.file);

  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }

  // Get the URL of the uploaded file and send it as a response.
  // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend

  res.json({ fileUrl: req.file.path });
});

router.post("/user/search", isAuthenticated, (req, res, next) => {
  const { username } = req.body;
  console.log(username);
  User.find({ $regex: username, $options: "i" })
    .populate("classes")
    .then((userFromDB) => res.status(200).json(userFromDB))
    .catch((err) => res.status(400).json({ message: "User not found!!" }));
});

router.put("/user", isAuthenticated, (req, res, next) => {
  const { _id } = req.payload;
  const { username, imageUrl } = req.body;
  User.findByIdAndUpdate(
    _id,
    {
      username,
      imageUrl,
    },
    { new: true }
  )

    .then((response) => res.json(response))
    .catch((err) => res.status(400).json({ message: "No user updated" }));
});
router.delete("/user", isAuthenticated, (req, res, next) => {
  const { _id } = req.payload;
  User.findByIdAndDelete(_id)
    .then(() => res.status(204).send())
    .catch((err) => res.status(400).json({ message: "Invalid user supplied" }));
});
module.exports = router;
