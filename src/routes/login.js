const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/db'); // A conexão com o banco de dados

router.post('/', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro no servidor' });
        if (results.length === 0) return res.status(401).json({ error: 'Usuário não encontrado' });

        const user = results[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ error: 'Erro ao verificar a senha' });
            if (!isMatch) return res.status(401).json({ error: 'Senha incorreta' });

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: 'Login bem-sucedido', token });
        });
    });
});

module.exports = router;
