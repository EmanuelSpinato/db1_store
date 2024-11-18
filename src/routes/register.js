const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models/db');

router.post('/', (req, res) => {
    const { name, email, phone, password } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: 'Erro ao criptografar a senha' });

        const query = 'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)';
        db.query(query, [name, email, phone, hash], (err, results) => {
            if (err) return res.status(500).json({ error: 'Erro ao registrar usuário' });
            res.json({ message: 'Usuário registrado com sucesso' });
        });
    });
});

module.exports = router;
