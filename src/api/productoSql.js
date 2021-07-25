const options = require('../config/mysql')
const knex = require('knex')(options)

class Productos {

    constructor() { }

    validacionTabla() {
        knex.schema.hasTable('productos').then(existis => {
            if(exists === false) {
                knex.schema.createTable('productos', table => {
                    table.increments('id'),
                    table.string('nombre'),
                    table.string('imagen'),
                    table.integer('precio'),
                    table.integer('stock'),
                    table.integer('codigo'),
                    table.string('timestamp')
                })
                .then(console.log('Tabla de productos creada'))
                .catch((err) => {console.log(err)})
                .finally(() => {
                    knex.destroy()
                }) 
            } else {
                console.log('tabla preexistente')
            }
        })
    }    

    async listar() {
        try {
            this.validacionTabla()
            let productos = await knex.from('productos').select('*')
            return productos
        } catch(error) {
            throw error
        }
    }

    async listarPorId(idProducto) {
        try {
            this.validacionTabla()
            let resultado = await knex('productos').where({id: idProducto})
        } catch(error) {
            throw error
        }
    }

    async guardar(producto) {
        try {
            this.validacionTabla()
            let timestamp = new Date().toLocaleString()
            producto.timestamp = timestamp
            let resultado = await knex('productos').insert(producto)
            return resultado
        } catch(error) {
            throw error
        }
    }

    async actualizar(idProducto, nuevoProducto) {
        try {
            let resultado = await knex('productos').where({id: idProducto}).update(nuevoProducto)
            return resultado
        } catch(error) {
            throw error
        }
    }

    async borrar(idProducto) {
        try {
            let resultado = await knex('productos').where({id: idProducto}).del()
            return resultado
        } catch(error) {
            throw error
        }
    }
}

module.exports = new Productos()