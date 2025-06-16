// routes/users.js
const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')

const router = express.Router()

// Registro de nuevo usuario
router.post('/register', async (req, res) => {
    const { nombre, email, password } = req.body
    
    if (!nombre || !email || !password) {
        return res.status(400).json({ error:'Todos los campos son obligatorios' })
    }
    if (password.length < 6) {
        return res.status(400).json({ error:'La password debe tener al menos 6 caracteres' })
    }
    if (! /\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ error:'Formato de email incorrecto' })
    }
    const existe = await User.findOne({ email })
    if (existe) {
        return res.status(400).json({ error:'Este email ya está registrado' })
    }
    const passwordHash = await bcrypt.hash(password, 10)

    const nuevoUsuario = new User({ nombre, email, passwordHash })
    await nuevoUsuario.save()
    res.json({ message:'Usuario registrado con éxito' })
});

// Listado de Usuarios
router.get('/list', async (req, res) => {
    const users = await User.find({}, '-passwordHash')
    res.json(users)
});

module.exports = router
