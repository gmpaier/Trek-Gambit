const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class VisitActivity extends Model {};

VisitActivity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    visit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'visit',
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
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'visitactivity',
  }
);

module.exports = VisitActivity;