// nome, preco, desconto (0 -1), funçao precoComDesconto

let produto:{
    nome: string, 
    preco:number, 
    desconto:number, 
    precoComDesconto: () => number

}


produto = {
    nome: "Banana",
    preco:12.3,
    desconto: 0.1,
    precoComDesconto(){
        return this.preco * (1 - this.desconto)
    }
}

console.log(produto.nome);
console.log(produto.preco);
console.log(produto.desconto);
console.log(produto.precoComDesconto());
