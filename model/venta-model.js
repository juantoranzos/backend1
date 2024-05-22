const {Schema, model}= require('mongoose');
const ProductosVendidosSchema = Schema({
    nombreComprador:{
        type:String,
        require:true,

    },
    vendedor:{
        type:String,
        require:true,
    },
    ProductoNombre:{
        type:String,
        require:true,
    },
    producto:{
        type: Schema.Types.ObjetId,
        ref: 'Productos',
        require:true,   
    },
    fechaVenta : {
        type: Date,
        default: Date.now
    },
});
module.export = model('ProductosVendidos', ProductosVendidosSchema);