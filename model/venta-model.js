const { Schema, model } = require('mongoose');

const ProductosVendidosSchema = new Schema({
    nombreComprador: {
        type: String,
        required: true,
    },
    vendedor: {
        type: String,
        required: true,
    },
    ProductoNombre: {
        type: String,
        required: true,
    },
    producto: {
        type: Schema.Types.ObjectId,  // Corrige el error tipográfico aquí
        ref: 'Productos',
        required: true,
    },
    fechaVenta: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('ProductosVendidos', ProductosVendidosSchema);  // Corrige `module.export` a `module.exports`
