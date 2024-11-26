export function saudacao(nome: string): string {
    const manha = new Date().getHours() < 12

   return `Ola ${nome}! Passar bem!`
}

export function multiplicar(n1: number, n2: number): number {
    return n1 * n2
}

export function multiplicarPerigosa(n1: any, n2: any): number {
   return n1 * n2
    
}

console.log(multiplicar(1.42, 55));

function imprimirNoConsole(): void {
    console.log('Exemplo de function da classe da turma dev');
}

imprimirNoConsole()


//Aprendemos a fazer a syntax do TS = tipo e o tipo de retorno