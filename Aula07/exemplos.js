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



//Exemplo 3 fruta

class Fruta{
    //cria construtor
    constructor(){
        this.sabor = "Doce";
        this.nome = "Laranja";
        this.cor = "Verde";
        this.peso = 400;
        this.diasdesdecolheita = 5;
        this.isMadura = null;
    }

    //cria metodo
    madura(diasParaMadura){
        if(diasParaMadura >= this.diasdesdecolheita){
            console.log(`A ${this.nome} está madura`);
        } else {
            console.log(`A ${this.nome} não está madura`);
        }
    }
}

//instancia objeto
Laranja = new Fruta();
Laranja.madura(6);