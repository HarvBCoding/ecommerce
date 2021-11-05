// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // id column: integer, doesn't allow null, primary key, auto increment
    // product_name column: string, doesn't allow null
    // price column: decimal, doesn't allow null, validates value is a decimal
    // stock column: integer, doesn't allow null, default value of 10, validates value is numeric
    // category_id column: integer, references the category model's id 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
