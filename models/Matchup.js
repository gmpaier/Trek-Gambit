const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Matchup extends Class {};

Matchup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    win_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'park',
        key: 'id',
      },
    },
    loss_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'park',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'matchup',
  }
);

module.exports = Matchup;