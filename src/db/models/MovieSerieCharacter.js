'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieSerieCharacter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MovieSerieCharacter.init({
    movie_serieId: DataTypes.INTEGER,
    characterId: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'MovieSerieCharacter',
  });
  return MovieSerieCharacter;
};