const Productos = require('../model/producto-model');
const ProductosVendidos = require('../model/venta-model');
const crearProducto = async(req, res)=>{

try {
 const nuevoProducto = new Productos(req.body);
 await nuevoProducto.save();
 res.status(201).json({
    msg: 'Producto Creado con exito',
 });
} catch (error) {
    res.status(500).json({
        msg: 'Error al crear el producto',
    })
    console.log(error)
}
}

const listaProductos = async(req,res)=>{
    try {
        const listaProductos = await Productos.find();
        res.status(200).json({
            msg: 'Lista de Productos',
            lista: listaProductos,
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener la lista de Productos',
        })
        console.log(error)
    }
}

const crearVenta = async(req,res)=>{
 try {
    const producto = await Productos.findbyId(req.body.producto);
    if (!producto) {
        res.status(400).json({
            msg: 'Error',
        })
    }
       req.body.productoNombre = producto.name
       const nuevaVenta = new ProductosVendidos(req.body)
       console.log(nuevaVenta)
       await nuevaVenta.save();
       res.status(201).json({
        msg: 'Venta Creada con exito',
       });
 } catch (error) {
    res.status(500).json({
        msg: 'error al crear la venta', 
    })
 }
}

const listaVentas = async(req,res)=>{
    try {
        const listaVentas = await ProductosVendidos.find();
        console.log(listaVentas);
        res.status(200).json({
            lista: listaVentas,

        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Conectarse con un admin'
        })
    }
}
module.exports = {crearProducto, listaProductos, crearVenta, listaVentas};
