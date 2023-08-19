'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie_serie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie_serie.belongsToMany(models.Character, {
        through: "MovieSerieCharacter",
        as: "Characters",
        foreignKey: "id"
      });
      Movie_serie.belongsToMany(models.Gender, {
        through: "MovieSerieGender",
        as: "Genders",
        foreignKey: "id"
      });
      Movie_serie.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }
  Movie_serie.init({
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rate: {
      type: DataTypes.TINYINT,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Movie_Serie',
  });
  return Movie_serie;
};