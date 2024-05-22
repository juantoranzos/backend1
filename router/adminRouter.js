const express = require('express');
const {
    crearProducto,
    listaProductos,
    crearVenta,
    listaVentas,
} = require('../controllers/adminControllers');
const routerAdmin = express.Router();

routerAdmin.post('/crear-producto', crearProducto);
routerAdmin.get('/productos', listaProductos);
routerAdmin.post('/crear-venta', crearVenta);
routerAdmin.get('/ventas', listaVentas);
module.exports = routerAdmin;