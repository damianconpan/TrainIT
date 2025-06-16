// server/server.js
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('mongoose')
const userRouter = require("./routes/users");

const app = express()
app.use(cors()) 
app.use(express.json()) // para leer json en el body

// Conexión a la base de datos
connectDB.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.log(err));


// Rutas
app.use('/api/users', userRouter)


// Servir archivos estáticos (public)
const path = require('path')
app.use(express.static(path.resolve(__dirname, '..', 'public')))


// Levantar el puerto
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Servidor iniciado en http://localhost:${port}`))