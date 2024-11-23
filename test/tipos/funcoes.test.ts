// Desenvolvimento orientado a teste
// Duas possibilidades de escrever o teste: code ou teste e vice-versa

import { multiplicar, saudacao } from "../../src/tipos/funcoes"

test('Deve retornar uma saudacao baseada na hora atual', () => {
    const s = saudacao('Faustino')
    expect(s).toBe('Boa noite! Passar bem!')
})

test('Deve multiplicar dois numeros', () =>{
    const resultado = multiplicar(4, 5)
    expect(resultado).toBe(20)
})