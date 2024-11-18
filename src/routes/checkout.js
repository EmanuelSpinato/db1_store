const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Processar o pedido
router.post('/', (req, res) => {
    const { userId, address, paymentInfo } = req.body;

    const query = 'INSERT INTO orders (user_id, address, payment_info, status) VALUES (?, ?, ?, ?)';
    db.query(query, [userId, address, paymentInfo, 'Pendente'], (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao processar pedido' });
        res.json({ message: 'Pedido realizado com sucesso' });
    });
});

module.exports = router;
