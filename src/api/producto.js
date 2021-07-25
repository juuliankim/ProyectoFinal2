const mongoose = require('mongoose')
const modeloProductos = require('../models/productos')

class Productos {

    constructor() {
        this.administrador = true
    }

    async listar() {
        try {
            let resultado = await modeloProductos.find({})
            return resultado
        } catch(error) {
            throw error
        }
    }

    async listarPorId(idProducto) {
        try {
            let resultado = await modeloProductos.find({ _id: idProducto})
            return resultado
        } catch(error) {
            throw error
        }
    }

    async guardar(producto) {
        try {
            let timestamp = new Date().toLocaleString()
            producto.timestamp = timestamp
            let resultado = await modeloProductos.create(producto)
            return resultado
        } catch(error) {
            throw error
        }
    }

    async actualizar(idProducto, nuevoProducto) {
        try {
            let resultado = await modeloProductos.findByIdAndUpdate(idProducto, nuevoProducto)
            return resultado
        } catch(error) {
            throw new Error('No se pudo actualizar el producto')
        }
    }

    async borrar(idProducto) {
        try {
            let resultado = await modeloProductos.findByIdAndDelete(idProducto)
            return resultado
        } catch(error) {
            throw error
        }
    }
}

module.exports = new Productos()