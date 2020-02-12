'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    website: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Shop.associate = function(models) {
    // associations can be defined here
  };
  return Shop;
};