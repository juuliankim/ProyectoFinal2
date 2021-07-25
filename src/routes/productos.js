const express = require('express')
const router = express.Router()
const productos = require('../api/producto')

function accesoAdmin (req, res, next) {
    if(productos.administrador == true) {
        next()
    } else {
        res.status(401).send({error: -1, descripcion: `ruta ${req.originalUrl} metodo ${req.method} no autorizada`})
    }
}

router.get('/productos/listar', async (req, res) => {
    let resultado = await productos.listar()
    res.json(resultado)
})

router.get('/productos/listar/:id', async (req, res) => {
    let idProducto = req.params.id
    let resultado = await productos.listarPorId(idProducto)
    res.json(resultado)
})

router.post('/productos/guardar', accesoAdmin, async (req, res)=>{
    let nuevoProducto = req.body
    let resultado = await productos.guardar(nuevoProducto)
    res.json(resultado)
})

router.put('/productos/actualizar/:id', accesoAdmin, async (req,res)=>{
    let idProducto = req.params.id
    let productoActualizado = req.body
    let resultado = await productos.actualizar(idProducto, productoActualizado)
    res.json(resultado)
})

router.delete('/productos/borrar/:id', accesoAdmin, async (req,res)=>{
    let idProducto = req.params.id
    let resultado = await productos.borrar(idProducto)
    res.json(resultado)
})

module.exports = router