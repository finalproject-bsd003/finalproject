'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dress.hasMany(models.Favorite, { foreignKey: 'DressId' })
      Dress.hasMany(models.Cart, { foreignKey: 'DressId' })

      Dress.belongsToMany(models.User, {
        through: models.Cart,
        foreignKey: 'DressId',
        otherKey: 'UserId'
      })
      Dress.belongsToMany(models.User, {
        through: models.Favorite,
        foreignKey: 'DressId',
        otherKey: 'UserId'
      })

      Dress.belongsTo(models.Category, { foreignKey: 'CategoryId' })

      Dress.hasMany(models.Image, { foreignKey: 'DressId' })
    }
  }
  Dress.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    grade: DataTypes.STRING,
    price: DataTypes.INTEGER,
    size: DataTypes.STRING,
    mainImage: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dress',
  });
  return Dress;
};