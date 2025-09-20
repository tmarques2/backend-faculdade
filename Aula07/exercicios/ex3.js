//Exercicio 3
// Classe mãe
class Automovel {
    constructor(cor, modelo, combustivel, rodas) {
        this.cor = cor;
        this.modelo = modelo;
        this.combustivel = combustivel;
        this.rodas = rodas;
    }

    info() {
        return `${this.modelo} (${this.cor}) - Combustível: ${this.combustivel}, Rodas: ${this.rodas}`;
    }
}

// Classe filha
class Carro extends Automovel {
    constructor(cor, modelo, combustivel) {
        super(cor, modelo, combustivel, 4);
        this.ligado = false;
        this.vidroAberto = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log("Carro ligado.");
        } else {
            console.log("Carro já está ligado.");
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log("Carro desligado.");
        } else {
            console.log("Carro já está desligado.");
        }
    }

    abrirVidro() {
        if (!this.vidroAberto) {
            this.vidroAberto = true;
            console.log("Vidro aberto.");
        } else {
            console.log("Vidro já está aberto.");
        }
    }

    fecharVidro() {
        if (this.vidroAberto) {
            this.vidroAberto = false;
            console.log("Vidro fechado.");
        } else {
            console.log("Vidro já está fechado.");
        }
    }
}

class Moto extends Automovel {
    constructor(cor, modelo, combustivel) {
        super(cor, modelo, combustivel, 2);
    }
}

class Caminhao extends Automovel {
    constructor(cor, modelo, combustivel) {
        super(cor, modelo, combustivel, 6);
    }
}

const meuCarro = new Carro("Vermelho", "Sedan X", "Gasolina");
console.log(meuCarro.info());

meuCarro.ligar();
meuCarro.abrirVidro();
meuCarro.fecharVidro();
meuCarro.desligar();

const minhaMoto = new Moto("Preta", "Moto Y", "Etanol");
console.log(minhaMoto.info());

const meuCaminhao = new Caminhao("Branco", "Truck Z", "Diesel");
console.log(meuCaminhao.info());