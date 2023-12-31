const { Model, DataTypes, Sequelize } = require('sequelize');


const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement:true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },


  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },

  descripcion:{
    type: DataTypes.TEXT,
    allowNull: false
  },

  precio:{
    type: DataTypes.INTEGER,
    allowNull: false
  },

  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },

}

  class Product extends Model {
    static associate(){}
    static config(sequelize){
      return {
        sequelize,
        tableName: PRODUCT_TABLE,
        modelName: 'Product',
        timestamps: false
      }
    }
  }

module.exports = {Product,ProductSchema,PRODUCT_TABLE }