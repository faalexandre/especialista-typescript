type Usuario = {
    nome: string,
    email:string
}
const usuarios: Usuario[] = [
    {nome: 'Faustino', email: 'faa@gmail.com'},
    {nome: 'Angola', email: 'aaa@gmail.com'},
    {nome: 'Luanda', email: 'll@gmail.com'},
    {nome: 'Huambo', email: 'hhh@gmail.com'},
    {nome: 'Huila', email: 'huh@gmail.com'},
    
]

function buscaPorEmail(email: string): Usuario | null {
    return usuarios.find(u => u.email === email)?? null
}

console.log(buscaPorEmail('hhh@gmail.com'));
console.log(buscaPorEmail('hlh@gmail.com'));
