// import models
const Category = require('./Category');
const Product = require('./Product');

const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  // Define the third table needed to store the foreign keys
    foreignKey: 'category_id',
   onDelete: "CASCADE",
  //  onDelete: "SET NULL",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through:ProductTag,
  foreignKey: "product_id"
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: ProductTag,
  foreignKey: "tag_id"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
