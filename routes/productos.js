const express = require("express");
const productosServicio = require("../servicios/servicioProductos");
const router = express.Router();

const validatorHendler = require("../middleware/validator.hendler");
const {
  schemaCrearProducto,
  schemaActualizarProducto,
  schemaObtenerProducto,
} = require("../schema/schemaProducto");

router.get("/", async (req, res, next) => {
  try {
    const productos = await productosServicio.getAllProductos(req, res);
    res.send({productos});
  } catch (error) {
    next(error);
  }
});


router.post(
  '/',
  validatorHendler(schemaCrearProducto, 'body'),
  async (req, res, next) => {
   try {
    const body = req.body
    console.log(body)
    const createProduct = await productosServicio.crearNuevoProducto(body);
    return res.send(createProduct)
   } catch (error) {
    next(error)
   }
  }
);

router.patch(
  '/:id',
  validatorHendler(schemaObtenerProducto, 'params'),
  validatorHendler(schemaActualizarProducto, 'body'),
  async (req, res,next) => {
    try {
      const {id} = req.params
      const body = req.body
      const updateProduct = await productosServicio.actualizarProducto(id, body);
      return res.send({updateProduct});
    } catch (error) {
      next(error)
    }
  }
);

// router.patch(
//   "/:id",
//   validatorHendler(schemaObtenerProducto, "params"),
//   validatorHendler(schemaActualizarProducto, "body"),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const body = req.body;
//       const actualizarProducto = await productosServicio.actualizarProducto(
//         id,
//         body
//       );
//       return actualizarProducto;
//     } catch (error) {
//       next(error);
//     }
//     return actualizarProducto;
//   }
// );


router.delete('/:id', (req, res, next) => {
  try {
    const {id} = req.params
    const deleteProduct  = productosServicio.eliminarProducto(id);
    return res.send({deleteProduct})
  } catch (error) {
    next(error)
  }
});

router.get(
  "/:id",
  validatorHendler(schemaObtenerProducto, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const unProducto = await productosServicio.getOneProducto(id)
      res.send(unProducto)
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
