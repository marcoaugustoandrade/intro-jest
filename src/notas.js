function calcularNF(n1, n2) {

  if (n1 < 0 || n2 < 0) {
    throw new Error('As notas não podem ser menores que 0 (zero)');
  }

  if (n1 > 10 || n2 > 10) {
    throw new Error('As notas não podem ser maiores que 10 (dez)')
  }

  if (typeof n1 != 'number' || typeof n2 != 'number') {
    throw new Error('As notas devem ser numéricas')
  }
  
  nf = n1 + n2

  if (nf > 10) {
    throw new Error('A soma das notas não podem ser maiores que 10 (dez)')
  }

  if (nf >= 6.0) {
    return true
  } else {
    return false
  }
}

module.exports = calcularNF
