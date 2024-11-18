const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configura o uso de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Middleware para registrar requisições e parsear JSON
app.use(express.json());

// Dados de produtos simulados
const produtos = [
    { id: 1, nome: 'Smart TV 55" 4K', categoria: 'eletronicos', preco: 2500.00 },
    { id: 2, nome: 'Smartphone XYZ', categoria: 'eletronicos', preco: 1200.00 },
    { id: 3, nome: 'Notebook Core i5', categoria: 'eletronicos', preco: 3200.00 },
    { id: 4, nome: 'Camisa Casual', categoria: 'roupas', preco: 80.00 },
    { id: 5, nome: 'Calça Jeans', categoria: 'roupas', preco: 120.00 },
    { id: 6, nome: 'Tênis Esportivo', categoria: 'roupas', preco: 200.00 },
    { id: 7, nome: 'Sofá 3 Lugares', categoria: 'casa', preco: 1500.00 },
    { id: 8, nome: 'Mesa de Jantar', categoria: 'casa', preco: 1000.00 },
    { id: 9, nome: 'Cadeira de Escritório', categoria: 'casa', preco: 300.00 },
    { id: 10, nome: 'Bicicleta Mountain Bike', categoria: 'esportes', preco: 1800.00 },
    { id: 11, nome: 'Halter 10kg', categoria: 'esportes', preco: 50.00 },
    { id: 12, nome: 'Bola de Futebol', categoria: 'esportes', preco: 70.00 },
    { id: 13, nome: 'Livro de Ficção', categoria: 'livros', preco: 40.00 },
    { id: 14, nome: 'Biografia Famosa', categoria: 'livros', preco: 60.00 },
    { id: 15, nome: 'Livro de Tecnologia', categoria: 'livros', preco: 90.00 },
    { id: 16, nome: 'Pneu Aro 15', categoria: 'automotivo', preco: 250.00 },
    { id: 17, nome: 'Bateria Automotiva', categoria: 'automotivo', preco: 400.00 },
    { id: 18, nome: 'Óleo de Motor', categoria: 'automotivo', preco: 30.00 }
];

// Rota básica
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'public', 'index.html'));
});

// Rota de API para buscar produtos por termo
app.get('/api/produtos', (req, res) => {
    const query = req.query.query?.toLowerCase() || '';
    const resultados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(query) ||
        produto.categoria.toLowerCase().includes(query)
    );
    res.json(resultados);
});

// Rota para Registro de Usuário
app.post('/register', (req, res) => {
    const { name, email, phone, password } = req.body;

    // Simulação de lógica de registro (salvamento no banco de dados)
    if (name && email && phone && password) {
        res.status(201).json({ message: 'Registro bem-sucedido!' });
    } else {
        res.status(400).json({ message: 'Dados inválidos' });
    }
});

// Rota para Login de Usuário
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Simulação de lógica de autenticação
    if (email === 'teste@exemplo.com' && password === 'senha123') {
        res.status(200).json({ message: 'Login bem-sucedido!' });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
