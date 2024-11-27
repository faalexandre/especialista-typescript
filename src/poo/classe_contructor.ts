class Curso {
// construtor
constructor( readonly id: number, public nome ?: string){
    this.id = id
    if(id < 1) throw new Error('Id invalido')
}

}

const c1 = new Curso(123)
c1.nome = 'Iniciando com TypeScript'
console.log(c1.id);
console.log(c1.nome);

const c2 = new Curso (452, "TypeScript avançado com construtor")

console.log(c2);
export {}