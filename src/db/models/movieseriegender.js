'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieSerieGender extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MovieSerieGender.init({
    movie_serieId: DataTypes.INTEGER,
    genderId: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'MovieSerieGender',
  });
  return MovieSerieGender;
};