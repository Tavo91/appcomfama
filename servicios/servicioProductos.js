const sequelize = require('../libs/sequelize')



const getAllProductos = async (req, res)=>{
    try {
        const query = 'SELECT * FROM tasks'
        const [data] = await sequelize.query(query)
        return  {data}
    } catch (error) {
        console.log(error)
    }

}



const crearNuevoProducto = (req, res)=>{
 try {
    const body = req.body
    console.log(body)
    res.json({
        ok:true,
        data: body
    })
    
 } catch (error) {
    console.log(error)
    
 }
}


const actualizarProducto = (req, res)=>{
  try {
    const { id } = req.params;
    if(id !=1){
        throw boom.notFound('producto no encontrado')
    }
    const body = req.body;
    res.json({
            message:'Producto Actualizado',
            producto: body,
             id,
            
        });
  } catch (error) {
    console.log(error)
    
  }
}


const eliminarProducto = (req, res)=>{
    try {
        const { id } = req.params;
    res.json({
            message:'Producto Eliminado',
            id,
            
        });
    } catch (error) {
        console.log(error)
    }
}


const getOneProducto = (req, res)=>{
    try {
        const { id } = req.params;
    res.json({
      id: id,
      nombre: "teclado",
      precio: 2000,
      categoria: "tecnologia",
    });
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getAllProductos,
    crearNuevoProducto,
    actualizarProducto,
    eliminarProducto,
    getOneProducto
}