const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRouter = require("./routes/users")

dotenv.config()
const app = express()

app.use(cors()) 
app.use(express.json()) 
app.use(express.static('public'))

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error(err))

// Rutas
app.use('/api/users', userRouter)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server iniciado en http://localhost:${port}`))
