// api com utilização da OpenWeather

const express = require('express'); // importa a biblioteca express
const cors = require("cors"); // importa a biblioteca cors para permitir acesso externo
const axios = require('axios'); // importa a biblioteca axios
//require('dotenv').config(); // pega variaveis de ambiente
const app = express(); // instancia o servidor
const PORT = 3000; // porta que irá rodar a aplicação
const apiKey = '46feaf2d6f46008600418771836b4450'
//process.env.OPENWEATHER_API_KEY; // pega a variavel da chave da api no .env

app.use(cors()); // permite acesso externo a api

app.get('/weather', async(req,res)=>{
    const{city,country} = req.query; // armazena a cidade e o pais quando faz a requisição
    if(!city || !country){
        return res.status(400).json({error: 'Informe a cidade e o país'});
    }
    try {
        // requisição parapegar as condições climáticas de uma cidade
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);
        // variavel para armazenar a resposta da api
        const data = response.data;
        const temperature = data.main?.temp ??0;
        const humidity = data.main?.humidity ??0;
        const windSpeed = data.wind?.speed? data.wind.speed *3.6 :0;
        const rainChance = data.rain?.['1h'] ?? 0;
        const weatherCondition = data.weather?.[0]?.description ?? 'Desconhecido';

        res.json({temperature,humidity,windSpeed,rainChance,weatherCondition});

    }catch(err){
        if(err.response?.status==404){
            return res.status(404).json({error: 'Cidade não encontrada'});
        }
        res.status(500).json({error:'Erro ao obter dados do clima'});
    }
});


// criando uma rota multiple  para exibir mais de uma cidade

app.get('/multiple',async(req,res) => {
    const {cities}= req.query;
    // verifico se cities esta vazio
    if(!cities){
     return res.status(400).json({error:'Informe pelo menos uma cidade'})
    }
    const cityList = cities.split(',');
    const results =[]; // Lista para armazenar os resultados
    try {
        for (let city of cityList){
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);
        
        // results.push o push serve para adicionar elementos na lista
        results.push({city,temperature: response.data.main?.temp ??0,
            weather: response.data.weather?.[0]?.description??'Desconhecido'});
        
    }
    res.json(results);
    
}  catch(err){
        res.status(500).json({error:'Erro ao consultar api para multiplas cidades'});
     
    }

});


/*app.get('/multiple', async (req, res) => {
    const { cities } = req.query;

    if (!cities) {
        return res.status(400).json({ error: 'Informe pelo menos cidade.'});
    }

    const cityList = cities.split(',');
    const results = [];

    try {
        for (let city of cityList) {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
            );

        results.push({
            city,
            temperature: response.data.main?.temp ?? 0,
            weather: response.data.weather?.[0]?.description ?? 'Desconhecido'
        });
        }

        res.json(results);
        
    }   catch (err) {
        res.status(500).json({ error: 'Erro ao consultar API para múltiplas cidades.'})
    }    
});*/


app.get('/alert', async (req, res) => {
    const { city, country } = req.query;

    if (!city || !country) {
        return res.status(400).json({ error: 'Informe cidade e país.'});
    }

    try {
        const response = await axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric&lang=pt_br`
        );

        const temp = response.data.main?.temp ?? 0;

        let alert = temp > 30 ? 'Quente' : temp < 10 ? 'Frio' : 'Agradavel';

        res.json({ city, temperature: temp, alert});

    }   catch (err) {
        res.status(500).json({ error: 'Erro ao obter dados do clima.'})
    } 
});

app.listen(PORT,()=>console.log(`Servidor rodando em http://localhost:${PORT}`));