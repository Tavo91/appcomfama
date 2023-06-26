const { matchedData } = require("express-validator");
const sequelize = require("../libs/sequelize");
const { models } = require("../libs/sequelize");

const getAllProductos = async () => {
    try {
      const data = await models.Product.findAll({
       
      })
      return {
        data
      }
    } catch (error) {
      console.log(error)
    }
  
  }

  const crearNuevoProducto = async (body) =>{
    try {
     console.log(body)
     const newCategory = await models.Product.create(body)
     return newCategory
    } catch (error) {
     console.log(error)
    }
   
   }


   const actualizarProducto = async (id, body) =>{
    try {
      const category = await models.Product.findByPk(id)
      if (!category) {
        return {
          error: 'category not found'
        }
      }
      const response = await category.update(body)
      return response
    } catch (error) {
      console.log(error)
    }
  }
  



const eliminarProducto = async (id) => {
    try {
     const category = await models.Product.findByPk(id)
     await category.destroy()
     return {
       message: 'producto eliminado',
       id
     }
    } catch (error) {
     console.log(error)
    }
   }


const getOneProducto = async (id) => {
    try {
     const product = await models.Product.findByPk(id)
     if(!product){
       return {
         message: 'product not found'
       }
     }
     return product
    } catch (error) {
     console.log(error)
    }
   }
   

module.exports = {
  getAllProductos,
  crearNuevoProducto,
  actualizarProducto,
  eliminarProducto,
  getOneProducto,
};
