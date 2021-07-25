const express = require('express')
const app = express()

require('./database/connection')

const productosRouter = require('./routes/productos')
const carritoRouter = require('./routes/carrito')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', productosRouter)
app.use('/api', carritoRouter)

app.use((err, req, res, next) =>{
    console.error(err.message)
    res.status(500).send('Algo se rompio')
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`)
});

server.on('error', error => {
    console.error('Error de servidor: ', error)
});

module.exports = server