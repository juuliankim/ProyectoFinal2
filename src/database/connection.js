const mongoose = require('mongoose')
const mongo = require('../config/config.json')

let conectado = mongo.MONGO_LOCAL
// let conectado = mongo.MONGO_ATLAS

const connection = mongoose.connect(conectado, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
    console.log('[Mongoose] - connected in:', conectado)
})

mongoose.connection.on('error', (err) => {
    console.log('[Mongoose] - error:', err)
})

module.exports = connection