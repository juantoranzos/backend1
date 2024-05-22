const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/backend1');
        console.log('db conectado');
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la base de datos');
    }
};

module.exports = dbConnection;
