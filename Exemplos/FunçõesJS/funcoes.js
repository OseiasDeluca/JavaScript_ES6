//Função de primeira classe 

function getName() { // Tenho uma função
    return 'Oseías Oliveira Deluca'
}

function logFn(fn) { // Recebe uma função por parâmetro
    console.log(fn()) // E aplica um console.log no que essa função retornar
}
const logFnResult = logFn // Atribuir com uma variável

logFnResult(getName) // Passada por argumentos (Passando a fuNção getName)
