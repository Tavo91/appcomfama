const {User, UserSchema} = require('./user.model')
const { Product, ProductSchema} = require('../models/product.models')


function setupModels (sequelize){
    User.init(UserSchema, User.config(sequelize))
    Product.init(ProductSchema, Product.config(sequelize))


    User.associate(sequelize.models)
    Product.associate(sequelize.models)
}


module.exports = setupModels