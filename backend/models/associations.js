const { Auth } = require("./auths");
const { User } = require("./users");
const { OkvedSection, OkvedClass, OkvedSubclass, OkvedGroup, OkvedSubgroup, OkvedActivity } = require("./okved");
const { Profession } = require("./professions");



// User and Auth
User.belongsTo(Auth, {
  targetKey: "auth_uid",
  foreignKey: "user_uid",
  as: "auth",
});

// Раздел → Класс
OkvedSection.hasMany(OkvedClass, { foreignKey: 'section_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
OkvedClass.belongsTo(OkvedSection, { foreignKey: 'section_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Класс → Подкласс
OkvedClass.hasMany(OkvedSubclass, { foreignKey: 'class_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
OkvedSubclass.belongsTo(OkvedClass, { foreignKey: 'class_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Подкласс → Группа
OkvedSubclass.hasMany(OkvedGroup, { foreignKey: 'subclass_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
OkvedGroup.belongsTo(OkvedSubclass, { foreignKey: 'subclass_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Группа → Подгруппа
OkvedGroup.hasMany(OkvedSubgroup, { foreignKey: 'group_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
OkvedSubgroup.belongsTo(OkvedGroup, { foreignKey: 'group_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Подгруппа → Вид
OkvedSubgroup.hasMany(OkvedActivity, { foreignKey: 'subgroup_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
OkvedActivity.belongsTo(OkvedSubgroup, { foreignKey: 'subgroup_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
