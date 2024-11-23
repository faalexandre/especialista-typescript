// Desenvolvimento orientado a teste
// Duas possibilidades de escrever o teste: code ou teste e vice-versa

import { saudacao } from "../../src/tipos/funcoes"

test('Deve retornar uma saudacao baseada na hora atual', () => {
    const s = saudacao('Faustino')
    expect(s).toBe('Boa noite! Passar bem!')
})