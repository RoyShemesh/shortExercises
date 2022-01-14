const express = require("express");
const { Blog, User } = require("../models/index");
const { Op } = require("sequelize");
const { tokenExtractor } = require("../util/middlewares");

const router = express.Router();

// const tokenExtractor = (req, res, next) => {
//   const authorization = req.get("authorization");
//   if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
//     try {
//       req.decodedToken = jwt.verify(authorization.substring(7), SECRET);
//     } catch {
//       res.status(401).json({ error: "token invalid" });
//     }
//   } else {
//     res.status(401).json({ error: "token missing" });
//   }
//   next();
// };

const blogFinder = async (req, res, next) => {
  req.blog = await Blog.findByPk(req.params.id);
  next();
};

router.get("/", async (req, res) => {
  let where = {};

  if (req.query.search) {
    where = {
      [Op.or]: [
        {
          title: { [Op.iLike]: `%${req.query.search}%` },
        },
        {
          author: { [Op.iLike]: `%${req.query.search}%` },
        },
      ],
    };
  }

  const blogs = await Blog.findAll({
    attributes: { exclude: ["userId"] },
    include: {
      model: User,
      attributes: ["name"],
    },
    where,
    order: [["likes", "DESC"]],
  });
  res.json(blogs);
});

router.post("/", tokenExtractor, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const blog = await Blog.create({ ...req.body, userId: user.id });
    res.json(blog);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/:id", blogFinder, async (req, res, next) => {
  try {
    req.blog.likes += 1;
    await req.blog.save();
    res.status(200).json({ likes: req.blog.likes });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:id", blogFinder, async (req, res, next) => {
  try {
    await req.blog.destroy();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
