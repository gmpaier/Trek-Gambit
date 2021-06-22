const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserPark extends Model {};

UserPark.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id"
      },
    },
    park_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "park",
        key: "id"
      },
    },
    visit_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userpark',
  }
);

module.exports = UserPark;