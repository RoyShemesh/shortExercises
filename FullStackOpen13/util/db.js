const { Sequelize } = require("sequelize");
const { DATABASE_URL } = require("./config");
const move = require("umzug");
const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await runMigrations();
    console.log("database connected");
  } catch (err) {
    console.log("connecting database failed");
    return process.exit(1);
  }

  return null;
};

const runMigrations = async () => {
  const migrator = new move(migrationConf);
  const migrations = await migrator.up();
  console.log("Migrations up to date", {
    files: migrations.map((mig) => mig.file),
  });
};
const rollbackMigration = async () => {
  await sequelize.authenticate();
  const migrator = new move(migrationConf);
  await migrator.down();
};
module.exports = { sequelize, connectToDatabase, rollbackMigration };

const migrationConf = {
  storage: "sequelize",
  storageOptions: { sequelize, tableName: "migrations" },
  migrations: {
    params: [sequelize.getQueryInterface()],
    path: `${process.cwd()}/migrations`,
    pattern: /\.js$/,
  },
};
