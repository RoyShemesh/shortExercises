const Blog = require("./blogModel");
const User = require("./userModel");
const Team = require("./teamsModel");
const Membership = require("./membershipModel");
const UserBlogs = require("./userBlogsModel");
Blog.belongsTo(User);
User.hasMany(Blog);

User.belongsToMany(Team, { through: Membership });
Team.belongsToMany(User, { through: Membership });

User.belongsToMany(Blog, { through: UserBlogs, as: "readlist_blogs" });
Blog.belongsToMany(User, { through: UserBlogs, as: "users_readlist" });
// Blog.sync({ alter: true });
// User.sync({ alter: true });

module.exports = { Blog, User, Team, Membership, UserBlogs };
