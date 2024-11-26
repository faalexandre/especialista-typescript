//type Usuario= { nome: string, email: string}

//Como o TS pode nos ajudar na definicao dos atributos de um objeto;

let usuario = {
    nome: "Faustino Alfredo",
    email: 'falexandre@gmail.com'
}

//O TS infere o que se coloca em termos de valor no objeto, aqui a propriedadde senha nao sera imprimido
//usuario.senha = '123456'

console.log(usuario.email, usuario.nome);

usuario = {
    nome: 'Yoanny',
    email: 'yo@outlook.com'
}

console.log(usuario.nome, usuario.email);
