// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag): products can have many tags
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'items',
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag): tags can belong to many products
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tags',
  foreignKey: 'tag_id'
});

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
