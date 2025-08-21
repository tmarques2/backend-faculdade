//Importar express
const express = require('express');
//Criar instancia
const app = express();
//Definir porta
const port = 3000;

//Criando rota 
app.get('/', (req,res)=>{
    res.send("Bem-vindo à minha primeira API! - Thainara");
});

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});