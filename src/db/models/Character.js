'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Character.belongsToMany(models.Movie_Serie, {
        through: "MovieSerieCharacter",
        as: "Movies_Series",
        foreignKey: "id"
      });
      Character.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }
  Character.init({
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    history: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Character',
  });
  return Character;
};