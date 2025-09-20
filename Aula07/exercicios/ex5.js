//Exercicio 5
class Maquina{
    constructor(nome_maquina, qtd_eixo, rotacao_minuto, consumo_energia){
        this.nome_maquina = nome_maquina;
        this.qtd_eixo = qtd_eixo;
        this.rotacao_minuto = rotacao_minuto;
        this.consumo_energia = consumo_energia;
        this.maquina_ligada = false;
    }
    ligar(){
        if(!this.maquina_ligada){
            this.maquina_ligada = true;
            console.log("Maquina ligada")
        } else {
            console.log("Maquina ja esta ligada!");
        }
    }
    desligar(){
        if(this.maquina_ligada){
            this.maquina_ligada = false;
            console.log("Maquina desligada")
        } else {
            console.log("Maquina ja esta desligada!");
        }
    }
    velocidade(novarotacao){
        if(this.maquina_ligada){
            this.rotacao_minuto = novarotacao
            console.log(`Nova velocidade: ${novarotacao}`);
        } else {
            console.log("A máquina precisa estar ligada")
        }
    }
}

class Furadeira extends Maquina {
    constructor(nome_maquina, rotacao_minuto, consumo_energia){
        super(nome_maquina, 1, rotacao_minuto, consumo_energia);
    }
}

const minha_furadeira = new Furadeira ("Furadeira Bosch", 5, 500);

minha_furadeira.ligar();
minha_furadeira.velocidade(100);
minha_furadeira.desligar();