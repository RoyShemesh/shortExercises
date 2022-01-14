const router = require("express").Router();

const { user } = require("pg/lib/defaults");
const { User, Blog, UserBlogs } = require("../models");
const Team = require("../models/teamsModel");
const { tokenExtractor } = require("../util/middlewares");

router.get("/", async (req, res) => {
  const users = await User.findAll({
    include: [
      { model: Blog, attributes: { exclude: ["userId"] } },
      {
        model: Team,
        attributes: ["name", "id"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  res.json(users);
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get("/:id", async (req, res) => {
  let where = {};
  if (req.query.read) {
    where = { readed: req.query.read };
  }
  const user = await User.findByPk(req.params.id, {
    attributes: { exclude: ["admin", "disabled", "id"] },
    include: [
      // { model: Blog, attributes: { exclude: ["userId"] } },
      {
        model: Blog,
        as: "readlist_blogs",
        attributes: { exclude: ["userId"] },
        through: {
          model: UserBlogs,
          as: "readinglist:",
          attributes: ["readed", "id"],
          where,
        },
        // through: { attributes: [] },
        // include: [{ model: User, attributes: ["name"] }],
        include: [{ model: User, attributes: [] }],
      },
      // { model: Team, attributes: ["name", "id"], through: { attributes: [] } },
    ],
  });

  if (user) {
    res.json({
      user,
    });
  } else {
    res.status(404).end();
  }
});

// router.put("/:username", async (req, res) => {
//   const { newName } = req.body;
//   if (!newName) return res.sendStatus(400);
//   try {
//     const user = await User.update(
//       { name: newName },
//       { where: { username: req.params.username } }
//     );
//     res.status(200).send(user);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });
const isAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  if (!user.admin) {
    return res.status(401).json({ error: "operation not allowed" });
  }
  next();
};

router.put("/:username", tokenExtractor, isAdmin, async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.params.username,
    },
  });

  if (user) {
    user.disabled = req.body.disabled;
    await user.save();
    res.json(user);
  } else {
    res.status(404).end();
  }
});

module.exports = router;
