//Exercicio 7
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

class Cliente {
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
    }
}

class Jogo {
    constructor(titulo){
        this.titulo = titulo;
    }
}

let clientes = [];
let jogos = [];

app.get('/', (req, res)=>{
    res.send('Bem Vindo a API games')
});

app.post('/cadastrar_cliente')