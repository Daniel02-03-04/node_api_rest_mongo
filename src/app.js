const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bookRoutes = require('./routes/book.routes.js')
const app = express()
const port = process.env.PORT || 3000
const { config } = require('dotenv')

config()

app.use(bodyParser.json()) // Parseador de Bodies

// Acá conectaremos la base de datos:
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection

app.use('/books', bookRoutes)

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
})