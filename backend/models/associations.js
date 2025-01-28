const { Auth } = require("./auths");
const { User } = require("./users");
const { Okved } = require("./okved");
const { Profession } = require("./professions");


// User and Auth
User.belongsTo(Auth, {
  targetKey: "auth_uid",
  foreignKey: "user_uid",
  as: "auth",
});

// // Establish many-to-many associations
// Profession.belongsToMany(Okved, { through: "profession_okved",  foreignKey: 'profession_id' });
// Okved.belongsToMany(Profession, { through: "profession_okved", foreignKey: 'okved_id' });

// Establish many-to-many associations