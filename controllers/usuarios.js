
const { response, request} = require('express');





const Usuario = require('../models/usuario');



const usuariosGet =  async  (req = request, res = response) => {
 
   const usuario =  await Usuario.findAll({
     
   });

res.json({
usuario
});

} 


const  usuariosPost  = (req, res = response) => {

const body = req.body;



    res.json({
        msg:'Post API -controlador', body
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;
    res.json({
        msg:'Put API -controlador', id
    })
}


const usuariosPatch = (req, res = response) => {

    res.json({
        msg:'Patch API -controlador'
    })
}

const usuariosDelete = (req, res = response) => {

    res.json({
        msg:'Delete API -controlador'
    })
}


module.exports = {
    usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete
}

