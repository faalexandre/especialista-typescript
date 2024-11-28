// Produto 
//id
//nome (2 - 250)
//preco(> 0) 
//desc (0 - 0.8) 
//precoFinal

class Produto {
    // O construtor serve a definir as variaveis
    constructor(
        readonly id: number,
        readonly nome: string,
        readonly preco: number,
        readonly desc: number = 0,
 
    ){
        if(id <= 0) throw new Error('Id invalido')
        if(nome.length < 2) throw new Error('Nome pequeno')
        if(nome.length > 250) throw new Error('Nome grande')
        if(preco <= 0) throw new Error('Preço invalido')
        if(desc < 0 || desc > 0.8) throw new Error('Desconto invalido')
    }

    //Método ou comportamento do produto: 
    //Ele precisa de dois dados para funcionar, nao externo
    get precoFinal(){
        return this.preco * (1 - this.desc)
    }

}

//
const p1 = new Produto(1, 'Caneta', 12.50, 0.1)
console.log(p1.nome, p1.precoFinal);

const p2 = new Produto(2, 'Notebook', 7860.78)
console.log(p2.nome, p2.precoFinal);


export {}
