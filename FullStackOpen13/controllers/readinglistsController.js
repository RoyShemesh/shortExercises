const { UserBlogs } = require("../models");
const { tokenExtractor } = require("../util/middlewares");

const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const { blog_id, user_id } = req.body;
    if (blog_id === undefined || user_id === undefined)
      return res.status(400).send("Missing variables");
    const userBlog = await UserBlogs.create({ blog_id, user_id });
    res.json(userBlog);
  } catch (error) {
    res.send(500).send(error);
  }
});

router.put("/:id", tokenExtractor, async (req, res) => {
  try {
    const userBlog = await UserBlogs.findOne({
      where: { user_id: req.decodedToken.id, id: req.params.id },
    });
    if (userBlog === null)
      return res.status(404).send("User and code doesnt match");
    userBlog.readed = true;
    await userBlog.save();
    res.send(userBlog);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error happend");
  }
});
module.exports = router;
