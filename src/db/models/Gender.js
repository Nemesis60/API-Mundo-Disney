'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gender extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Gender.belongsToMany(models.Movie_Serie, {
        through: "MovieSerieGender",
        as: "MovieSeries",
        foreignKey: "id"
      });
      Gender.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }
  Gender.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Gender',
  });
  return Gender;
};