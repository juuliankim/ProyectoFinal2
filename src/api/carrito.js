const modeloCarrito = require('../models/carrito')
const productos = require('./producto')

class Carrito {

    constructor() {
    }

    async listar(){        
        try {
            let resultado = await modeloCarrito.find()
        } catch(error) {
            throw error
        }
    }

    async listarPorId(idCarrito){
        try {
            let resultado = await modeloCarrito.find({_id: idCarrito})
            return resultado
        } catch(error) {
            throw error
        }
    }

    async guardar(idProducto){
        try {
            let carrito = {
                timestamp: 'fecha',
                producto: {}
            }
            let timestamp = new Date().toLocaleString()
            let producto = await productos.listarPorId(idProducto)
            carrito.timestamp = timestamp
            carrito.producto = producto
            let resultado = await modeloCarrito.create(carrito)
            return resultado
        } catch(error) {
            throw error
        }
    }

    async borrar(idCarrito){
        try {
            let resultado = await modeloCarrito.findByIdAndDelete(idCarrito)
            return resultado
        } catch(error) {
            throw error
        }
    }

    async actualizar(idCarrito, nuevoProducto) {
        try {
            let nuevoCarrito = await modeloCarrito.find({_id: idCarrito})
            nuevoCarrito.producto = nuevoProducto
            let resultado = await modeloCarrito.findByAndUpdate(idCarrito, nuevoCarrito)
            return resultado
        } catch(error) {
            throw error
        }
    }
}

module.exports = new Carrito()