// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category: a product can only belong to one category

// Categories have many Products: category can have many products

// Products belongToMany Tags (through ProductTag): products can have many tags

// Tags belongToMany Products (through ProductTag): tags can belong to many products

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
