// //Exercicio 1
// class Carro{
//     constructor(){
//         this.marca = null;
//         this.modelo = null;
//         this.ano = null;
//         this.motor_ligado = false;
//     }
//     ligar_motor(){
//         this.motor_ligado = true;
//     }
//     desligar_motor(){
//         this.motor_ligado = false
//     }
//     status_motor(){
//         if(this.motor_ligado==true){
//             console.log("O motor está ligado!")
//         } else {
//             console.log("O motor está desligado!")
//         }
//     }
// }

// carro = new Carro()
// carro.marca = "Honda"
// carro.modelo = "Civic"
// carro.ano = 2025
// carro.status_motor()
// carro.ligar_motor()
// carro.status_motor()
// carro.desligar_motor()
// carro.status_motor()


// //Exercicio 2
// class Pessoa{
//     constructor(nome, idade, profissao, salario) {
//         this.nome = nome;
//         this.idade = idade;
//         this.profissao = profissao;
//         this.salario = salario;
//     }
//     exibetrabalho(nomeEmpresa, tempoTrabalho){
//         console.log(`Empresa: ${nomeEmpresa}, Tempo de trabalho: ${tempoTrabalho} anos`);
//     }
// }

// const pessoa1 = new Pessoa("Thainara", 18, "Aprendiz", 1000);
// pessoa1.exibetrabalho("Bosch", 1);


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

// Classe filha: Carro
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
