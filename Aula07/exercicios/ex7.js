//Exercicio 7
const express = require("express");
const app = express();
app.use(express.json());

class Cliente {
  constructor(id, nome, email) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
}

class Jogo {
  constructor(id, titulo, plataforma) {
    this.id = id;
    this.titulo = titulo;
    this.plataforma = plataforma;
  }
}

let clientes = [];
let jogos = [];


app.get("/", (req, res) => {
  res.send("Bem vindo a API games 🎮");
});

app.post("/cadastrar_clientes", (req, res) => {
  const { nome, email } = req.body;
  const novoCliente = new Cliente(clientes.length + 1, nome, email);
  clientes.push(novoCliente);
  res.status(201).json({ mensagem: "Cliente cadastrado com sucesso!", novoCliente });
});


app.post("/cadastrar_jogos", (req, res) => {
  const { titulo, plataforma } = req.body;
  const novoJogo = new Jogo(jogos.length + 1, titulo, plataforma);
  jogos.push(novoJogo);
  res.status(201).json({ mensagem: "Jogo cadastrado com sucesso!", novoJogo });
});


app.get("/exibe_clientes", (req, res) => {
  res.json(clientes);
});


app.get("/exibe_jogos", (req, res) => {
  res.json(jogos);
});


app.delete("/deletar_cliente/:id", (req, res) => {
  const { id } = req.params;
  clientes = clientes.filter(cliente => cliente.id != id);
  res.json({ mensagem: `Cliente com ID ${id} deletado.` });
});


app.delete("/deletar_jogo/:id", (req, res) => {
  const { id } = req.params;
  jogos = jogos.filter(jogo => jogo.id != id);
  res.json({ mensagem: `Jogo com ID ${id} deletado.` });
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

