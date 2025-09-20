//Exercicio 4
const { resolve } = require('path');
const readline = require('readline');
 // cria interface de leitura
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

 class Cliente {
    constructor(nome, profissao, saldo) {
        this.nome = nome;
        this.profissao = profissao;
        this.saldo = saldo;
    }
    pix(valor){
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor;
            console.log("Piquis enviado com sucesso");
        } else {
            console.log("Saldo insuficiente haha");
        }
    }

    emprestimo(valor){
        if(valor > 0){
            this.saldo += valor;
            console.log("Empréstimo realizado com sucesso");
        } else {
            console.log("Valor de empréstimo inválido");
        }
    }

    saque(valor){
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor;
            console.log("Saque realizado com sucesso");
        } else {
            console.log("Valor indisponivel");
        }
    }

    extrato(valor){
        console.log("===EXTRATO===");
        console.log(`Nome: ${this.nome}`);
        console.log(`Profissão: ${this.profissao}`);
        console.log(`Saldo: ${this.saldo}\n`);
    }
 }

function perguntar(pergunta){
    return new Promise(resolve => rl.question(pergunta, resposta => resolve(resposta)));
 }


async function menu(cliente){
    console.log("\n=== MENU DO BANCO ===");
    console.log("0 - Sair");
    console.log("1 - Pix");
    console.log("2 - Empréstimo");
    console.log("3 - Saque");
    console.log("4 - Extrato\n");

    const opcao = await perguntar ("Escolha o número da sua opção: ");

    switch(opcao){
        case "1":
            const valorpiquis = parseFloat(await perguntar ("Digite o valor do piquis: "));
            cliente.pix(valorpiquis)
            break;
        case "2":
            const valoremprestimo = parseFloat(await perguntar ("Digite o valor do empréstimo: "));
            cliente.emprestimo(valoremprestimo);
            break;
        case "3":
            const valorsaque = parseFloat(await perguntar ("Digite o valor do saque:"));
            cliente.saque(valorsaque);
            break;
        case "4":
            cliente.extrato();
            break;
        case "0":
            console.log("Fechando banco");
            rl.close();
            return; // encerra a recursão
        default:
            console.log("Opção inválida!");
   
    }

    await menu(cliente);

 }


 async function inicarBanco() {
    const nome = await perguntar("Digite seu nome: ")
    const profissao = await perguntar("Digite sua profissão: ");
    const saldoInicial = parseFloat(await perguntar("Digite o saldo inicial: "));

    const cliente = new Cliente(nome, profissao, saldoInicial);

    await menu(cliente);

 }

 inicarBanco()