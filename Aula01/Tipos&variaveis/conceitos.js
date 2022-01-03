// 3 formas de armazenar um valor que poderemos usar futuramente.

// var
// let
// const

// O JavaScript antes possuia 2 escopos: Global e de Função.
// Agora possui 3 escopos: Global, Função e de bloco.

/*
// Escopo global 


// function name() {
    // escopo de função
}



 {
     // Escopo de bloco
 }

 if () {
    // Exemplo
 }

 for() {
    // Exemplo
 }

 */

 // Exemplos de Var e Let com escopos no browser (Usei o Chrome)
 /*
>>var teste = 'Opa'
>>undefined
>>teste
'Opa' // variavel declarada em escopo global, ao pedir para mostra-la, tudo ok.


>>let testeLet = 'opa'
>>undefined
>>window.testeLet
>>undefined


>>function teste() {
    let opa = 'teste'
}
undefined

X: VM632:1 Uncaught ReferenceError: opa is not defined
    at <anonymous>:1:1

*/