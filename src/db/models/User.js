'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Character, {
        foreignKey: 'userId',
        as: 'characters'
      });
      User.hasMany(models.Gender, {
        foreignKey: 'userId',
        as: 'genders'
      });
      User.hasMany(models.Movie_Serie, {
        foreignKey: 'userId',
        as: 'movies_series'
      });
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'User',
  });
  return User;
};