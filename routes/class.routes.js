const router = require("express").Router();
const fileUploader = require("../config/cloudinary.config");
const Class = require("../models/Class.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
router.post("/class-create", isAuthenticated, (req, res, next) => {
  const {
    author,
    assault_rifle,
    sniper,
    smgs,
    lmgs,
    shotguns,
    pistols,
    launchers,
    perk1,
    perk2,
  } = req.body;
  const { _id } = req.payload;

  Class.create({
    assault_rifle,
    sniper,
    smgs,
    lmgs,
    shotguns,
    pistols,
    launchers,
    perk1,
    perk2,
    author: _id,
  })
    .then((createdclasses) => {
      return User.findByIdAndUpdate(
        _id,
        {
          $push: { classes: createdclasses._id },
        },
        { new: true }
      );
    })
    .then((updatedUser) => {
      res.status(200).json(updatedUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "Error adding classes" });
    });
});

router.get("/class/:id", isAuthenticated, (req, res, next) => {
  const { id } = req.params;
  Class.findById(id)
    .then((response) => res.status(200).json(response))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "classes not found!!" });
    });
});

router.get("/classes", isAuthenticated, (req, res, next) => {
  Class.find()

    .then((response) => res.status(200).json(response))
    .catch(() => res.status(400).json({ message: "classes don't find" }));
});

router.delete("/class/:classId", isAuthenticated, (req, res, next) => {
  const { classId } = req.params;
  Class.findByIdAndRemove(classId)
    .then((response) => res.json(response))
    .catch((err) =>
      res.status(400).json({ message: "Invalid class supplied" })
    );
});
router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
  console.log("file is: ", req.file);

  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }

  res.json({ fileUrl: req.file.path });
});
module.exports = router;
