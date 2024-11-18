const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Listar todos os produtos
router.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao listar produtos' });
        res.json(results);
    });
});

// Visualizar produto específico
router.get('/:id', (req, res) => {
    const productId = req.params.id;
    db.query('SELECT * FROM products WHERE id = ?', [productId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao buscar produto' });
        if (results.length === 0) return res.status(404).json({ error: 'Produto não encontrado' });
        res.json(results[0]);
    });
});

module.exports = router;
