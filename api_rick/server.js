const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API intermediária de Rick and Morty');
});

// Rota para listar todos os personagens
app.get('/personagens', async (req, res) => {
    try {
        const url = 'https://rickandmortyapi.com/api/character';
        console.log(`Fazendo requisição para: ${url} com params:`, req.query);
        const response = await axios.get(url, { params: req.query });
        res.json(response.data);
    } catch (error) {
        console.error('--- ERRO DETALHADO AO BUSCAR LISTA ---');
        if (error.response) {
            // A requisição foi feita e o servidor respondeu com um erro
            console.error('Data da Resposta:', error.response.data);
            console.error('Status da Resposta:', error.response.status);
            console.error('Headers da Resposta:', error.response.headers);
        } else if (error.request) {
            // A requisição foi feita mas nenhuma resposta foi recebida
            console.error('Request (sem resposta):', error.request);
        } else {
            // Erro ao configurar a requisição
            console.error('Erro de Configuração:', error.message);
        }
        console.error('Config da Requisição (Axios):', error.config);
        console.error('--- FIM DO ERRO DETALHADO ---');
        res.status(500).json({ message: 'Erro interno ao buscar a lista de personagens.' });
    }
});

// Rota para buscar um personagem específico pelo ID
app.get('/personagens/:id', async (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).json({ message: 'O ID do personagem deve ser um número.' });
    }

    try {
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        console.log(`Fazendo requisição para: ${url}`);
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(`--- ERRO DETALHADO AO BUSCAR ID ${id} ---`);
        if (error.response) {
            console.error('Data da Resposta:', error.response.data);
            console.error('Status da Resposta:', error.response.status);
            console.error('Headers da Resposta:', error.response.headers);
        } else if (error.request) {
            console.error('Request (sem resposta):', error.request);
        } else {
            console.error('Erro de Configuração:', error.message);
        }
        console.error('Config da Requisição (Axios):', error.config);
        console.error('--- FIM DO ERRO DETALHADO ---');
        
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ message: `Personagem com ID ${id} não encontrado.` });
        }
        res.status(500).json({ message: 'Erro interno ao buscar o personagem.' });
    }
});


// Rota para múltiplos personagens (não foi modificada, mas o erro deve ser similar)
app.get('/personagens/multiplos', async (req, res) => {
    const { ids } = req.query;
    if (!ids) {
        return res.status(400).json({ message: 'É necessário informar os IDs. Ex: ?ids=1,2,3' });
    }
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${ids}`);
        res.json(response.data);
    } catch (error) {
        // ... (o log de erro aqui também poderia ser detalhado) ...
        res.status(500).json({ message: 'Erro interno ao buscar os personagens.' });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});