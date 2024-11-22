const Erros = {
    NOM_NULO: 'nome_nulo',
    EMAIL_NAO_ENCONTRADO: 'email_nao_encontrado',
    URL_INVALIDA: 'url_invalida'
} as const

let erro: string
erro = Erros.NOM_NULO
console.log(erro);
