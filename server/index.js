const productosRouter = require('../routes/productos')

const express = require("express");


function apiRouter (app){
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/productos', productosRouter)
    
}

module.exports = apiRouter