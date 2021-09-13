const calcularNF = require('../src/notas')

test('Dado uma nota 4 e uma nota 2, o aluno deve ser aprovado', () => {
  expect(calcularNF(4, 2)).toBe(true)
})

test('Dado uma nota 4 e uma nota 1, o aluno deve ser reprovado', () => {
  expect(calcularNF(4, 1)).toBe(false)
})

test('Dado uma nota 5 e uma nota 4, o aluno deve ser aprovado', () => {
  expect(calcularNF(5, 4)).toBe(true)
})

test('Dado uma nota 0 e uma nota 6, o aluno deve ser aprovado', () => {
  expect(calcularNF(0, 6)).toBe(true)
})

test('Dado uma nota 0 e uma nota 0, o aluno deve ser reprovado', () => {
  expect(calcularNF(0, 0)).toBe(false)
})

test('Dado uma nota -1 e uma nota 2, deve ser lançada exceção notas não podem ser menores que 0 (zero)', () => {
  expect(() => {
    calcularNF(-1, 2)
  }).toThrow('As notas não podem ser menores que 0 (zero)')
})

test('Dado uma nota 6 e uma nota -3, deve ser lançada exceção notas não podem ser menores que 0 (zero)', () => {
  expect(() => {
    calcularNF(6, -3)
  }).toThrow('As notas não podem ser menores que 0 (zero)')
})

test('Dado uma nota -3 e uma nota -3, deve ser lançada exceção notas não podem ser menores que 0 (zero)', () => {
  expect(() => {
    calcularNF(-3, -3)
  }).toThrow('As notas não podem ser menores que 0 (zero)')
})

test('Dado uma nota 12 e uma nota 4, deve ser lançada exceção notas não podem ser maiores que 10 (dez)', () => {
  expect(() => {
    calcularNF(12, 4)
  }).toThrow('As notas não podem ser maiores que 10 (dez)')
})

test('Dado uma nota 3 e uma nota 14, deve ser lançada exceção notas não podem ser maiores que 10 (dez)', () => {
  expect(() => {
    calcularNF(3, 14)
  }).toThrow('As notas não podem ser maiores que 10 (dez)')
})

test('Dado uma nota 13 e uma nota 11, deve ser lançada exceção notas não podem ser maiores que 10 (dez)', () => {
  expect(() => {
    calcularNF(13, 11)
  }).toThrow('As notas não podem ser maiores que 10 (dez)')
})

test('Dado uma nota 9 e uma nota 3, deve ser lançada exceçao soma das notas não pode ser maiores que 10 (dez)', () => {
  expect(() => {
    calcularNF(9, 3)
  }).toThrow('A soma das notas não podem ser maiores que 10 (dez)')
})
