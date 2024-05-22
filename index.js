
const express = require('express');
const dbConection = require('./database/config');
const cors = require('cors');
const app = express();
 // lectura y parseo del body
 app.use(express.json());
 app.use(cors());
 app.use('/admin', require ('./router/adminRouter'));

dbConection();
//llamamos a un servidor definimos el puerto y ejecutamos el callback 
app.listen(4000,()=>{
    console.log('Servidor corriendo en el puerto 4000');

})