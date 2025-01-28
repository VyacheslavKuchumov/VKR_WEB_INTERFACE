const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");


const Okved = sequelize.define(
  "okved",
  {
    okved_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    section_code: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false
    },
    group_code: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false
    },
    
    group_name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
    
    
  },
  {
    tableName: "okved",
    timestamps: false,
  },
);



module.exports = { Okved };
