const Productos = require('../model/producto-model');
const ProductosVendidos = require('../model/venta-model');

const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Productos(req.body);
    await nuevoProducto.save();
    res.status(201).json({
      msg: 'Producto creado con éxito',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al crear el producto',
    });
    console.log(error);
  }
};

const listaProductos = async (req, res) => {
  try {
    const listaProductos = await Productos.find();
    res.status(200).json({
      msg: 'Lista de productos',
      lista: listaProductos,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al obtener la lista de productos',
    });
    console.log(error);
  }
};

const crearVenta = async (req, res) => {
  try {
    // Verifica que el producto existe usando el ID proporcionado en req.body.producto
    const producto = await Productos.findById(req.body.producto);

    // Si el producto no se encuentra, devuelve un mensaje de error
    if (!producto) {
      return res.status(400).json({
        msg: 'Producto no encontrado',
      });
    }

    // Asigna el nombre del producto al campo productoNombre en req.body
    req.body.ProductoNombre = producto.name;

    // Crea una nueva instancia del modelo ProductosVendidos con los datos del cuerpo de la solicitud
    const nuevaVenta = new ProductosVendidos(req.body);

    // Guarda la nueva venta en la base de datos
    await nuevaVenta.save();

    // Devuelve una respuesta exitosa
    res.status(201).json({
      msg: 'Venta creada con éxito',
      venta: nuevaVenta  // Opcional: devolver la venta creada
    });
  } catch (error) {
    // Si ocurre un error, devuelve un mensaje de error y lo registra en la consola
    res.status(500).json({
      msg: 'Error al crear la venta',
      error: error.message  // Opcional: devolver el mensaje de error
    });
    console.log(error);
  }
};


const listaVentas = async (req, res) => {
  try {
    const listaVentas = await ProductosVendidos.find();
    console.log(listaVentas);
    res.status(200).json({
      lista: listaVentas,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al obtener la lista de ventas',
    });
    console.log(error);
  }
};

module.exports = { crearProducto, listaProductos, crearVenta, listaVentas };
