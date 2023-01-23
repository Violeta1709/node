
const { response, request} = require('express');
const { SCHEMA } = require('sqlite3');
const {Connection} = require('../database/db')
const respuesta = require('../database/db')

const usuariosGet =  (req = request, res = response) => {
 
    const control = respuesta;
    
    res.send(console.log(control))
    

    

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

