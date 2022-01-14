const express = require("express");
const { Blog } = require("../models");
const { sequelize } = require("../util/db");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const authors = await Blog.findAll({
      attributes: [
        "author",
        [sequelize.fn("COUNT", sequelize.col("title")), "articles"],
        [sequelize.fn("SUM", sequelize.col("likes")), "totalLikes"],
      ],
      group: "author",
    });
    res.send(authors);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
