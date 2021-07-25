const fs = require('fs')

class Persistencia {
    constructor() { }

    guardar(producto) {
        fs.writeFileSync('../src/persistencia/productos.txt', JSON.stringify(producto, null, '\t'))
    }
}

module.exports = new Persistencia()