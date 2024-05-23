const {Schema, model}= require('mongoose');
const ProductoSchema = Schema({
    name:{
        type:String,
        require:true,

    },
    precio:{
        type:Number,
        require:true,
    },
    descripcion:{
        type:String,
        require:true,
    },
});
module.exports = model('Productos', ProductoSchema);