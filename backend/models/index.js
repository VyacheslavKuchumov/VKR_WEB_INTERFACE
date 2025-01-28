// models/index.js
const { sequelize } = require("../connection");

const { Auth } = require("./auths");
const { User } = require("./users");

const { OkvedSection, OkvedClass, OkvedSubclass, OkvedGroup, OkvedSubgroup, OkvedActivity } = require("./okved");



require("./associations"); // Import the associations after models are loaded

// Optionally sync the database (ensure tables are created)
async function initializeDatabase() {
  try {
    await sequelize.sync({ force: true }); // Sync all models with the database
    console.log("Database synchronized");
    
    await OkvedSection.create({
      code: 'A',
      name: 'Сельское, лесное хозяйство, охота, рыболовство и рыбоводство',
    });
  
    await OkvedClass.create({
      code: '01',
      name: 'Растениеводство и животноводство',
      section_id: 1, // ID раздела
    });
  
    await OkvedSubclass.create({
      code: '01.1',
      name: 'Выращивание однолетних культур',
      class_id: 1, // ID класса
    });
  
    await OkvedGroup.create({
      code: '01.11',
      name: 'Выращивание зерновых культур (кроме риса), зернобобовых культур и семян масличных культур',
      subclass_id: 1, // ID подкласса
    });
  
    await OkvedSubgroup.create({
      code: '01.11.1',
      name: 'Выращивание зерновых культур',
      group_id: 1, // ID группы
    });
  
    await OkvedActivity.create({
      code: '01.11.11',
      name: 'Выращивание пшеницы',
      subgroup_id: 1, // ID подгруппы
    });
  
    console.log('Данные успешно добавлены.');

  } catch (error) {
    console.error("Error syncing the database:", error);
  }
}

module.exports = { initializeDatabase };
