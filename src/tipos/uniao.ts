let nota : number | string = 10

nota = "A+"

console.log(nota);

type NotaOuConceito = number | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'

let n1: NotaOuConceito = 7
n1= 'C'

// Check-in de tipos en TS
console.log(n1);
