// // Exemplo 1 classe para autenticacao

// class Usuario{
//     //cria construtor
//     constructor(){
//         this.usuario = null;
//         this.senha = null;
//     }

//     //cria metodo chamado autentica
//     autentica(){
//         const usuario = "Senai";
//         const senha = "senai@2025";
//         if(this.usuario === usuario && this.senha === senha){
//             console.log("Login correto");
//         } else {
//             console.log("Erro, tente novamente");
//         }
//     }
// }

// //Exemplo de uso
// user = new Usuario();
// user.usuario='Senai';
// user.senha='senai@2023';
// user.autentica();



// //Exemplo 2 classe e construtor

// class Usuario{
//     constructor(){
//         this.nome = null;
//         this.login = null;
//         this.senha = null;
//         this.cpf = null;
//         this.celular = null;
//     }

//     //cria metodo para exibir as informações
//     exibir_info(){
//         console.log(`Nome do usuário ${this.nome}`);
//         console.log(`Login: ${this.login}`);
//         console.log(`Senha: ${this.senha}`);
//         console.log(`CPF: ${this.cpf}`);
//         console.log(`Celular: ${this.celular}`);
//     }

//     verificar_login(user, senha){
//         if(user===this.login && senha===this.senha){
//             console.log(`Login correto! Bem-vindo ${user}`);
//         } else {
//             console.log(`Login incorreto! Tente novamente!`);
//         }
//     }
// }

// Usuario1 = new Usuario(); //cria um objeto Usuario1 a partir da classe Usuario
// Usuario1.nome = "Thainara";
// Usuario1.login="Thainara";
// Usuario1.senha="1234";
// Usuario1.cpf="12345678999";
// Usuario1.celular="19999999999";
// Usuario1.exibir_info();
// Usuario1.verificar_login("Thainara", "123")



// //Exemplo 3 fruta

// class Fruta{
//     //cria construtor
//     constructor(){
//         this.sabor = "Doce";
//         this.nome = "Laranja";
//         this.cor = "Verde";
//         this.peso = 400;
//         this.diasdesdecolheita = 5;
//         this.isMadura = null;
//     }

//     //cria metodo
//     madura(diasParaMadura){
//         if(diasParaMadura >= this.diasdesdecolheita){
//             console.log(`A ${this.nome} está madura`);
//         } else {
//             console.log(`A ${this.nome} não está madura`);
//         }
//     }
// }

// //instancia objeto
// Laranja = new Fruta();
// Laranja.madura(6);



// //exemplo 4 herança

// class Usuario{
//     constructor(){
//         this.nome = null;
//         this.idade = null;
//     }
//     exibeinfo(){
//         console.log(`Nome: ${this.nome},idade ${this.idade}`)
//     }
// }

// class cliente extends Usuario {
//     constructor(){
//         super();    //super faz a classe filha herdar os atributos da classe mae
//         this.cargo = null;
//     }
//     exibeinfocargo(){
//         console.log(`Nome: ${this.nome}, idade: ${this.idade}, cargo: ${this.cargo} `);
//     }
// }

// Thainara = new cliente();
// Thainara.nome = "Thainara";
// Thainara.idade = 18;
// Thainara.cargo = "Aprendiz";

// Gustavo = new cliente();
// Gustavo.nome = "Gustavo";
// Gustavo.idade = 22;
// Gustavo.cargo = "Estagiário";

// Thainara.exibeinfocargo();
// Gustavo.exibeinfocargo();



// //exemplo 5 herança

// class Animal{
//     constructor(){
//         this.nome=null;
//         this.idade = null;

//    }
//    // Metodo da classe base
//    fazerSom(){
//     console.log(`${this.nome} faz um som`)
//    }
// }

// // Cria classe filha
// class Cachorro extends Animal{
//     constructor(){
//         super();
//         this.raca = null;

//     }
//     // polimorfismo
//     fazerSom(){
//         console.log(`${this.nome} um ${this.raca} late`);

//     }
//     //  exibe info
//     exibeinfo(){
//         console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Raça: ${this.raca}`)
//     }
// }

// // Cria a classe animal
// class Gato extends Animal{
//     constructor(nome){
//         super(nome); // herda o parametro nome da classe animal

//     }

//     fazerSom(){
//         console.log(`${this.nome} mia Miau !`)
//     }

// }

// //classe tigre
// class Tigre extends Animal{
//     constructor(){
//         super();
//         this.cor = null;
//     }
//     fazerSom(){
//         console.log(`Tigre ${this.nome} Aaar !`);
//     }
//     exibeinfo(){
//         console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Cor: ${this.cor}`);
//     }
// }

// // instancia o objeto Rocky da classe cachorro
// Rocky = new Cachorro();
// Rocky.nome="Rocky";
// Rocky.idade=3;
// Rocky.raca="Amstaff";
// Rocky.exibeinfo();
// Rocky.fazerSom();

// // Instancia o objeto Garfield da classe Gato
// Garfield = new Gato();
// Garfield.nome="Garfield";
// Garfield.idade=3;
// Garfield.fazerSom()

// //instancia o tigre
// Memphis = new Tigre();
// Memphis.nome = "Memphis";
// Memphis.idade = 30;
// Memphis.cor = "Branco";
// Memphis.fazerSom();
// Memphis.exibeinfo();



// //exemplo 6 - Permitindo que o usuario digite informações

// // cria uma variavel chamada readline
// let readline = require('readline');
// // Cria a interface de leitura
// const rl = readline.createInterface({
//     // pega a variavel de process para entrada stdin
//     input:process.stdin,
//     // pega a variavel de saida stdout
//     output:process.stdout
// });

// // pergunta ao usuario
// rl.question('Digite algo: ', (answer)=>{
//     console.log(`Voce digitou ${answer}`);
//     rl.close();
// });
// //console.log(readline);



 // exemplo 7 capturando informaçoes digitadas pelo usuario

 readline = require('readline'); 
 // cria interface de leitura
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

 // Cria array para armazenar o historico das respostas
 let historico=[];
 // função que pergunta em loop
 function perguntar(){
    rl.question('Digite algo ou sair para encerrar)',(resposta)=>{
        if(resposta.toLowerCase()=='sair'){
            console.log('Programa encerrado');
            console.log('Historico de entradas');
            historico.forEach((item,i)=>{
                console.log(`${i+1}: ${item}`);
            });
            rl.close();


        }else{
            historico.push(resposta); // salva a resposta no historico
            console.log(`Você digitou ${resposta}`);
            perguntar(); // reinicia o loop
        }
    })
 }

 // inicia o loop
 perguntar();