// server/routes/users.js
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')


// Registro de nuevo usuario
router.post('/register', async (req, res) => {
    const { nombre, email, password } = req.body;

    // Validaciones
    if (!nombre || !email || !password) {
        return res.status(400).json({ message:'Todos los campos son obligatorios'})
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ message:'Formato de correo electrónico no válido'})
    }
    if (password.length < 6) {
        return res.status(400).json({ message:'La password debe tener al menos 6 caracteres'})
    }
    // Verificar que el correo no esté en uso
    const existing = await User.findOne({ email })
    if (existing) {
        return res.status(400).json({ message:'Este correo ya está registrado'})
    }
    // Hash password
    const passwordHash = await bcrypt.hash(password, 10)

    // Crear nuevo
    await User.create({ nombre, email, passwordHash })
    res.json({ message:'Usuario registrado con éxito'})
});

// Listar todos los usuarios
router.get('/list', async (req, res) => {
    const users = await User.find({}, { passwordHash: 0 })
    res.json(users)
})

module.exports = router
