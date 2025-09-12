//5

const livro = {
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    genero: ''
};

//console.log(livro)

livro.titulo = 'Trono de Vidro';
livro.autor = 'Sarah J. Maas';
livro.anoPublicacao = 2012;
livro.genero = 'Fantasia';

console.log(livro)


//6
let anoAtual =  new Date().getFullYear();   //pega o ano atual

livro.idadePublicacao = anoAtual - livro.anoPublicacao;     //faz a subtração pra ver quantos anos tem

let mostrarDetalhes =  `
Título: ${livro.titulo}
Autor: ${livro.autor}
Ano de Publicação: ${livro.anoPublicacao}
Gênero: ${livro.genero}
Idade da Publicação: ${livro.idadePublicacao} anos
`;

console.log(mostrarDetalhes);


//7
// Acesso e exibição usando colchetes
console.log(livro['titulo']);
console.log(livro['autor']);
console.log(livro['anoPublicacao']);
console.log(livro['genero']);
console.log(livro['idadePublicacao']);


//8
// Adiciona a nova propriedade 'avaliacao', iniciando como null
livro.avaliacao = null;

// Tenta adicionar uma avaliação, verificando se já existe
if (livro.avaliacao === null) {
  livro.avaliacao = 'Excelente leitura! Nota 10.';
  console.log('Avaliação adicionada com sucesso:');
  console.log(livro.avaliacao);
} else {
  console.log('O livro já possui uma avaliação.');
}


//9
livro.genero = 'Aventura';
console.log(livro)


//10
delete livro.avaliacao;
console.log(livro)