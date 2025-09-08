// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// 1. Middleware nativo do Express para ler JSON
app.use(express.json());

// 2. Middleware de Log
const logMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};
app.use(logMiddleware);

// 3. "Banco de dados" em memória
let tarefas = [
    { id: 1, descricao: "Estudar HTTP", concluida: true },
    { id: 2, descricao: "Criar API de exemplo", concluida: false }
];

// 4. Rotas

// Rota inicial
app.get('/', (req, res) => {
    res.send('<h1>API de Tarefas Rodando!</h1>');
});

// Listar todas as tarefas
app.get('/tarefas', (req, res) => {
    res.status(200).json(tarefas);
});

// Criar uma nova tarefa
app.post('/tarefas', (req, res) => {
    if (!req.body.descricao) {
        return res.status(400).json({ message: "O campo 'descricao' é obrigatório." });
    }

    const novaTarefa = {
        id: tarefas.length + 1,
        descricao: req.body.descricao,
        concluida: false
    };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

// Atualizar uma tarefa existente
app.put('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tarefas.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }

    // Atualiza os dados
    tarefas[index].descricao = req.body.descricao ?? tarefas[index].descricao;
    tarefas[index].concluida = req.body.concluida ?? tarefas[index].concluida;

    res.status(200).json(tarefas[index]);
});

// Deletar uma tarefa
app.delete('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tarefas.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }

    tarefas.splice(index, 1);
    res.status(204).send();
});

// Exemplo de rota para testar erro do servidor
app.get('/erro', (req, res) => {
    res.status(500).json({ message: 'Erro interno simulado!' });
});

// 5. Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
