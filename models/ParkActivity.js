const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ParkActivity extends Model {};

ParkActivity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    park_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'parkactivity',
  }
);

module.exports = ParkActivity;