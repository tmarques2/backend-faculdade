//Exercicio 6
class Produto{
    constructor(nome, qtd, preco, comunicacao, consumo_energia){
        this.nome = nome;
        this.qtd = qtd;
        this.preco = preco;
        this.comunicacao = comunicacao;
        this.consumo_energia = consumo_energia;
        this.ligado = false;
        this.temperatura = null; // setpoint inicial
    }
    ligar(){
        if(!this.ligado){
            this.ligado = true;
            console.log(`\n${this.nome} ligou`)
        } else {
            console.log(`${this.nome} ja esta ligado!`);
        }
    }
    desligar(){
        if(this.ligado){
            this.ligado = true;
            console.log(`${this.nome} desligou`)
        } else {
            console.log(`${this.nome} ja esta desligado!`);
        }
    }
    ajustarTemperatura(setpoint) {
        if (this.ligado) {
            this.temperatura = setpoint;
            console.log(`${this.nome} ajustada para ${setpoint}°C.`);
        } else {
            console.log(`Não é possível ajustar a temperatura com o produto desligado.`);
        }
    }
    info() {
        console.log("\n=== INFORMAÇÕES DO PRODUTO ===");
        console.log(`Nome: ${this.nome}`);
        console.log(`Quantidade: ${this.qtd}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Tipo de Comunicação: ${this.comunicacao}`);
        console.log(`Consumo de Energia: ${this.consumo_energia}W`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log(`Temperatura: ${this.temperatura ?? "N/A"}\n`);
    }
}

class Fritadeira extends Produto {
    constructor(nome, qtd, preco, comunicacao, consumo_energia) {
        super(nome, qtd, preco, comunicacao, consumo_energia);
    }
}

class Televisao extends Produto {
    constructor(nome, qtd, preco, comunicacao, consumo_energia) {
        super(nome, qtd, preco, comunicacao, consumo_energia);
    }
}

class ArCondicionado extends Produto {
    constructor(nome, qtd, preco, comunicacao, consumo_energia) {
        super(nome, qtd, preco, comunicacao, consumo_energia);
    }
}

const minhaFritadeira = new Fritadeira("Fritadeira AirFry", 10, 450, "Wi-Fi", 1200);
minhaFritadeira.ligar();
minhaFritadeira.ajustarTemperatura(200);
minhaFritadeira.info();
minhaFritadeira.desligar();

const minhaTV = new Televisao("Smart TV Samsung", 5, 2500, "Bluetooth", 200);
minhaTV.ligar();
minhaTV.ajustarTemperatura(25);
minhaTV.info();
minhaTV.desligar();

const meuAr = new ArCondicionado("LG Dual Inverter", 3, 3500, "Wi-Fi", 1500);
meuAr.ligar();
meuAr.ajustarTemperatura(18);
meuAr.info();
meuAr.desligar();