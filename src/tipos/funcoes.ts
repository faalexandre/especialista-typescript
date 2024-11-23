export function saudacao(nome: string): string {
    const manha = new Date().getHours() < 12

    return `Ola ${nome}! Passar bem!`
    
}