const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class VisitMedia extends Model {};

VisitMedia.init(
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
    img_url: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'visitmedia',
  }
);

module.exports = VisitMedia;