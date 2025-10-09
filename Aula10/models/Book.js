// importando biblioteca do mongoose
const mongoose = require("mongoose");

// cria a estrutura (schema) para o documento da maquina
const BookSchema = new mongoose.Schema({
    title:{type: String, required:true},
    author:{type:String, required: true},
    year:{type:Number},
})

// exporta o modelo
module.exports = mongoose.model("Book", BookSchema);