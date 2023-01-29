const Post = require("../models/Post");
const router = require("express").Router();

//create post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const post = newPost.save();
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a post
//get feed?
module.exports = router;
