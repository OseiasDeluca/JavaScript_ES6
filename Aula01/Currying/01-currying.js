function soma(a, b) { // Função soma, recebe dois parâmetros
    return a + b
}

console.log(soma(2, 2))
console.log(soma(2, 3))
console.log(soma(2, 4))
console.log(soma(2, 5))

// Nota-se que estamos repetindo o mesmo parâmetro? Não queremos ficar toda hora passando esse "2", vamos então aplicar essa técnica de currying na soma().

// ver em 02-curryng.js a resposta.