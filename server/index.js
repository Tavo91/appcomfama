const productosRouter = require('../routes/productos')
const usuariosRouter = require('../routes/usuarios')
const express = require("express");


function apiRouter (app){
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/productos', productosRouter)
    router.use('/usuarios', usuariosRouter)
}

module.exports = apiRouter