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

//update a post
router.put("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.username == req.body.username) {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      console.log(updatedPost.description);
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("you can only update your own post");
  }
});

//delete a post

//get feed?
module.exports = router;
