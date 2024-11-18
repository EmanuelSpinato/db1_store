const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Adicionar produto ao carrinho
router.post('/add', (req, res) => {
    const { userId, productId, quantity } = req.body;

    const query = 'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)';
    db.query(query, [userId, productId, quantity], (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao adicionar ao carrinho' });
        res.json({ message: 'Produto adicionado ao carrinho' });
    });
});

// Visualizar carrinho do usuário
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    db.query('SELECT * FROM cart WHERE user_id = ?', [userId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao buscar carrinho' });
        res.json(results);
    });
});

// Remover item do carrinho
router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    db.query('DELETE FROM cart WHERE id = ?', [itemId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao remover item' });
        res.json({ message: 'Item removido do carrinho' });
    });
});

module.exports = router;
