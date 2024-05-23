const express = require('express');
const cors = require('cors');
const dbConnection = require('./database/config'); // Verifica que la ruta sea correcta
const app = express();
// Lectura y parseo del body
app.use(express.json());
app.use(cors());
dbConnection();
app.use('/admin', require('./router/adminRouter')); // Asegúrate de que la ruta sea correcta
// Conexión a la base de datos

// Definimos el puerto y ejecutamos el callback para iniciar el servidor
app.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000');
});
