const Joi = require('joi');

const nombre = Joi.string().alphanum().min(3).max(10)
const precio = Joi.number().integer().min(10)
const id = Joi.string()

const schemaCrearProducto = Joi.object({
    nombre: nombre.required(),
    precio: precio.required()
})

const schemaActualizarProducto = Joi.object({
    nombre: nombre,
    precio: precio
})

const schemaObtenerProducto = Joi.object({
    id: id.required(),
})


module.exports = {
    schemaCrearProducto,
    schemaActualizarProducto,
    schemaObtenerProducto

}
