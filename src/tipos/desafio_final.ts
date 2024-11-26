//type ContaCorrente (numero, saldo, movimentar)
type ContaCorrente = {
    numero: number, 
    saldo: number, 
    movimentar: (valor: number) => void
}


//type Cliente (nome, email, contas[])
type Cliente = {
    nome: string,
    email:string,
    contas: ContaCorrente []
}

// Se quiser externalizar a funçao 
//Como a function esta fora do contexto de um objeto e nao reconhece mais o this
// A funcao movimentar tem dois parametros mais aqui é uma instancia (this)
function movimentar(this: ContaCorrente, valor:number){
    this.saldo += valor
}

//lista clientes vai ser : const clientes: Cliente[] = [....]

const clientes: Cliente[] = [
    {
        nome:'Ana',
        email: 'ana@gmail.com',
        contas: [
            {numero: 1234,saldo: 0, movimentar: movimentar},
            {numero: 6444,saldo: 350.33, movimentar},
        ],
    }, 
    
    // Aqui temos o reuso da function Movimentar
    {
    nome:'Paula',
    email: 'paula@gmail.com',
    contas: [
        {numero: 6554,saldo:670.12, movimentar: movimentar},
        {numero: 3000,saldo: 1389.89, movimentar},
        ],
    }
]

// movimentarConta(numConta: number, valor: number)

function movimentarConta(numConta: number, valor: number){
const conta = clientes.map(cli => {
    return cli.contas.find(cc => cc.numero === numConta)
}).filter(c => c)[0]
conta?.movimentar(valor)
}

// movimentarConta(numConta: number, valor: number)

function consultarSaldo(numConta: number): number | null {
const conta = clientes.map(cli => {
    return cli.contas.find(cc => cc.numero === numConta)
}).filter(c => c)[0]
return conta?.saldo ?? null
}

movimentarConta(6554, 678.90)
console.log(consultarSaldo(6554));


movimentarConta(1234, -678.90)
console.log(consultarSaldo(3000));


// This como parametro
//Coisas relacionadas a tipos em TS
//Numeraçao de dados