const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");


// Модель разделов
const OkvedSection = sequelize.define(
  'okved_sections', 
  {
  code: {
    type: DataTypes.CHAR(1),
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},
{
  tableName: "okved_sections",
  timestamps: false,
},
);


// Модель классов
const OkvedClass = sequelize.define(
  'okved_classes', 
  {
  code: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},
{
  tableName: "okved_classes",
  timestamps: false,
},
);

// Модель подклассов
const OkvedSubclass = sequelize.define(
  'okved_subclasses', 
  {
  code: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},
{
  tableName: "okved_subclasses",
  timestamps: false,
});

// Модель групп
const OkvedGroup = sequelize.define(
  'okved_groups', 
  {
  code: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},
{
  tableName: "okved_groups",
  timestamps: false,
});

// Модель подгрупп
const OkvedSubgroup = sequelize.define(
  'okved_subgroups', 
  {
  code: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},
{
  tableName: "okved_subgroups",
  timestamps: false,
});

// Модель видов
const OkvedActivity = sequelize.define(
  'okved_activities', 
  {
  code: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},
{
  tableName: "okved_activities",
  timestamps: false,
});








module.exports = { OkvedSection, OkvedClass, OkvedSubclass, OkvedGroup, OkvedSubgroup, OkvedActivity };
