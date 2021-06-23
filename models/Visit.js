const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Visit extends Model {};

Visit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    park_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'park',
        key: 'id',
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'visit',
  }
);

module.exports = Visit;