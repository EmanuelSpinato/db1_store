const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/db');

// Rota de login
router.post('/login', (req, res) => {
    // lógica de login
});

// Rota de registro
router.post('/register', (req, res) => {
    // lógica de registro
});

module.exports = router;
