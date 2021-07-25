const express = require('express')
const router = express.Router()
const carrito = require('../api/carrito')

router.get('/carrito/listar', async (req, res) => {
    let resultado = await carrito.listar()
    res.json(resultado)
})

router.get('/carrito/listar/:id', async (req, res) => {
    let idCarrito = req.params.id
    let resultado = await carrito.listarPorId(idCarrito)
    res.json(resultado)
})

router.post('/carrito/guardar/:id', async (req, res) => { 
    let idProducto = req.params.id_producto
    let resultado = await carrito.guardar(idProducto)
    res.json(resultado)
})

router.put('/carrito/actualizar/:id', async (req, res) => {
    let idCarrito = req.params.id
    let nuevoProducto = req.body
    let resultado = await carrito.actualizar(idCarrito, nuevoProducto)
    res.json(resultado)
})

router.post('/carrito/borrar/:id', async (req, res) => {
    let idProducto = req.params.id
    let resultado = await carrito.borrar(idProducto)
    res.json(resultado)
})

module.exports = router