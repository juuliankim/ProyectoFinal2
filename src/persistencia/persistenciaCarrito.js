const fs = require('fs')

class Persistencia {
    constructor() { }

    guardar(carrito) {
        fs.writeFileSync('../src/persistencia/carrito.txt', JSON.stringify(carrito, null, '\t'))
    }
}

module.exports = new Persistencia()