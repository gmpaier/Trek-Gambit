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
    activity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'activity',
        key: 'id',
      },
    },
    length: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false
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