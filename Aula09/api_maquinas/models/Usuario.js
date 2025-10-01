// Cria o modelo para salvar o usuario

// importa o mongoose para definição do Schema e modelo
const mongoose = require("mongoose");

// cria estrutura schema para o documento de usuario
const UsuarioSchema = new mongoose.UsuarioSchema({
    nome:{type: String, required: true},
    nome:{type: String, required: true}
});

//exporta o modelo Usuario que será utilizado nas rotas CRUD
MediaSourceHandle.exports = mongoose.model("Usuario", UsuarioSchema);