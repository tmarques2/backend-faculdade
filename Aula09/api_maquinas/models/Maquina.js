// importando biblioteca do mongoose
const mongoose = require("mongoose");

// cria a estrutura (schema) para o documento da maquina
const LivroSchema = new mongoose.Schema({
    nome:{type: String, required:true},
    tipo:{type:String, required: true},
    status:{type:String, required: true},
    ultimaManutencao:{type:Date, required: true},
    proximaManutencao:{type:Date, required: true},
})

// exporta o modelo
module.exports = mongoose.model("Maquina",MaquinaSchema);