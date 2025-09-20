//Exercicio 2
class Pessoa{
    constructor(nome, idade, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.salario = salario;
    }
    exibetrabalho(nomeEmpresa, tempoTrabalho){
        console.log(`Empresa: ${nomeEmpresa}, Tempo de trabalho: ${tempoTrabalho} anos`);
    }
}

const pessoa1 = new Pessoa("Thainara", 18, "Aprendiz", 1000);
pessoa1.exibetrabalho("Bosch", 1);