const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.hash(req.body.password, salt);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      const { password, ...userInfo } = updatedUser._doc;
      res.status(200).json(userInfo);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only update your own account");
  }
});

//delete user

//get user

module.exports = router;
