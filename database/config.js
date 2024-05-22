const mongoose = require('mongoose');
const dbConection = async ()=>{
    try {
       await mongoose.connect();
       console.log('db conectado'); 
    } catch (error) {
        console.log(error)
    }
}

module.export = {dbConection};