// cria os metodos http para cadastrar deletar e listar as maquinas cadastradas

//importa as bibliotecas
const express = require("express");
const mongoose = require("mongoose");
const Maquina = require("../models/Maquina"); // importa a maquina da pasta models

const router = express.Router(); // pega a rota a partir da biblioteca da biblioteca Express

// cria o metodo post
router.post("/", async(req, res)=>{
    try{
        const{nome,tipo,status,ultimaManutentao,proximaManutencao}=req.body;
        const novaMaquina = await Maquina.create({nome,tipo,status,ultimaManutentao,proximaManutencao});
        res.status(201).json(novaMaquina);
    } catch(err) {
        res.status(400).json({error:err.message});
    }
});

// Cria o método get all - lista todas as máquinas cadastradas
router.get("/",async(req,res)=>{
    try{
        const maquinas = await Maquina.find();
        res.json(maquinas);
    } catch(err){
        res.status(500).json({error:err.message})
    }
});

// Cria o método get one - lista uma máquina especifica pelo id
router.get("/:id", async(req, res)=>{
    try{
        const maquina = await Maquina.findById(req.params.id);
        if(!maquina) return res.status(404).json({mensagem: "Maquina não encontrada"});
    } catch(err){
        res.status(500).json({error: err.message});
    }
});

// Cria o método put para modificar uma máquina existente
router.put("/:id",async(req,res)=>{
    try{
        const {nome,tipo,status,ultimaManutentao,proximaManutencao} = req.body;
        const maquinaAtualizada = await Maquina.findByIdAndUpadate(
            req.params.id,{nome,tipo,status,ultimaManutentao,proximaManutencao},{new:true}
        );
        if(!maquina) return res.status(404).json({message:"Máquina não encontrada"});
        res.json(maquinaAtualizada);
    } catch(err){
        res.status(404).json({error: err.message});
    }
});

// Cria o método delete
router.delete("/:id",async(req,res)=>{
    try{
        const maquinaDeletada = await Maquina.findByIdAndDelete(res.params.id);
        if(!maquinaDeletada) return res.status(404).json({mensagem:"Máquina não encontrada"})
    } catch(err){
        res.status(500).json({error: err.message});
    }
});

MediaSourceHandle.exports = router;