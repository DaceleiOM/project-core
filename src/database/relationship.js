const Admin = require('./models/admin')
const Country = require('./models/country');
const State = require('./models/state');
const City = require('./models/city');
const Branch = require('./models/branch');
const Manager = require('./models/manager');
const Brand = require('./models/brand');
const BrandCategory = require('./models/brand_category');
const ProductCategory = require('./models/product_category');
const Product = require('./models/product');
const User = require ('./models/user')

// relationship one to many states-country
State.belongsTo(Country, { foreignKey: 'country_id', as: 'country' });
Country.hasMany(State, { foreignKey: 'country_id', as: 'states' });

// relationship one to many cities-state
City.belongsTo(State, { foreignKey: 'state_id', as: 'state' });
State.hasMany(City, { foreignKey: 'state_id', as: 'cities' });

// relationship beetwene cities and branches
City.hasMany(Branch, { foreignKey: 'city_id', as: 'branches' });
Branch.belongsTo(City, { foreignKey: 'city_id', as: 'city' });

// relationship beetwene branches and managers
Branch.hasMany(Manager, { foreignKey: 'branch_id', as: 'managers' });
Manager.belongsTo(Branch, { foreignKey: 'branch_id', as: 'branch' });

// relationship beetwene brands and branchs
Brand.hasMany(Branch, { foreignKey: 'brand_id', as: 'branches' });
Branch.belongsTo(Brand, { foreignKey: 'brand_id', as: 'brand' });

// relationship beetwene brand and admins
Brand.hasOne(Admin, { foreignKey: 'brand_id', as: 'admin' });
Admin.belongsTo(Brand, { foreignKey: 'brand_id' });

// relationship beetwene brands and brandcategories
Brand.hasMany(BrandCategory, { foreignKey: 'brand_id', as: 'brand_categories' });
BrandCategory.belongsTo(Brand, { foreignKey: 'brand_id' });

// relationship beetwene brandcategories and products in table product_categories
BrandCategory.belongsToMany(Product, { through: ProductCategory, foreignKey: 'category_id', as: 'products' });
Product.belongsToMany(BrandCategory, { through: ProductCategory, foreignKey: 'product_id', as: 'categories' });

// relationship beetwen User and brand
User.belongsTo(Brand, { foreignKey: 'brandId', as: 'brand' });
Brand.hasOne(User, { foreignKey: 'brandId' });

// relationship beetwen User and branch
User.belongsTo(Branch, { foreignKey: 'branchId', as: 'branch' });
Branch.hasOne(User, { foreignKey: 'branchId' })
