const express = require('express')
 const cors = require('cors');
const Persona = require('../models/persona');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

     
        this.middlewares();
        this.routes();

        
    }




middlewares(){
this.app.use(cors())
//Directorio Publico

this.app.use(express.json());

this.app.use(express.static('public'));


}


    routes(){
  
        this.app.use(this.usuariosPath, require('../routers/usuarios'))
    }

    

    

    


    listen(){
    this.app.listen(this.port, ()=>{
        console.log('servidor corriendo en puerto', this.port);
    })               

}


}


module.exports = Server;