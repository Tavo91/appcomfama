const express = require("express");
const productosServicio = require("../servicios/servicioProductos")
const router = express.Router()

const validatorHendler = require("../middleware/validator.hendler")
const {schemaCrearProducto, schemaActualizarProducto, schemaObtenerProducto} = require("../schema/schemaProducto")

router.get("/", async (req, res, next) => {
  try {
    const productos = await productosServicio.getAllProductos(req, res);
    res.json(productos);
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHendler(schemaCrearProducto,'body'),
async(req, res)=>{
   const crearProducto = await productosServicio.crearNuevoProducto(req, res)
   return crearProducto
})

router.patch(
  "/:id",
  validatorHendler(schemaObtenerProducto, "params"),
  validatorHendler(schemaActualizarProducto, "body"),
  async (req, res) => {
    const actualizarProducto = await productosServicio.actualizarProducto(
      req,
      res
    );
    return actualizarProducto;
  }
);


router.delete('/:id', async(req, res)=>{
    const eliminarProducto = await productosServicio.eliminarProducto(req, res)
    return eliminarProducto
})

router.get("/:id", validatorHendler(schemaObtenerProducto,'params'),
 async (req, res) => {
   const obtenerProducto = await productosServicio.getOneProducto(req, res)
   return obtenerProducto

  });


  module.exports = router;
