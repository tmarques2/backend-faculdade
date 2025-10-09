// arquivo que cria nossa api
// importa as bibliotecas
const express = require("express"); // importa a biblioteca express
const mongoose = require("mongoose"); // importa a biblioteca mongoose
const cors = require("cors");

const app = express() // cria a variavel app para armazenar o express
app.use(cors());
app.use(express.json());    // Middleware para interpretar o Json

mongoose.connect("mongodb://localhost:27017/dblibrary", {
  
}).then(() => console.log("Conectado ao mongo DB")).catch(err=>console.error("Erro ao conectar", err));

const booksRoutes = require('./routes/books');
app.use("/api/books", booksRoutes);

app.listen(3000, ()=>{
    console.log(`Servidor rodando na porta 3000`);
});