// Capacidade de uma função lembrar o ambiente em que foi criada.
// Legal a título de conhecimento, mas na prática é bom evitar esse tipo e modelo.

function init() { // Essa função init retorna uma outra função
    const exemplo = 'Essa variável' // Cria uma variável exemplo

    return function(){
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`) // Todas as funções utilizam o valor de ${exemplo}

        return function(){
            console.log(`2 - O valor da variável exemplo é: ${exemplo}`)

            return function(){
                console.log(`3 - O valor da variável exemplo é: ${exemplo}`)
            }
        }
    }
}


// Cadeia de execução

const initFn1 = init()

const initFn2 = initFn1()

const initFn3 = initFn2()

initFn3()

//O que aparecerá quando for executada:
// 1 - O valor da variável exemplo é: Essa variável.
// 2 - O valor da variável exemplo é: Essa variável.
// 3 - O valor da variável exemplo é: Essa variável.


function init() { // Essa função init retorna uma outra função
    const exemplo = 'Essa variável' // Cria uma variável exemplo

  // Modelo ideal para códigos longos e antigos, para evitar confusão e saber de onde vem cada variável.
    return function(exemplo){ // Exemplo de função pura
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`) // Todas as funções utilizam o valor de ${exemplo}

        return function(exemplo){
            console.log(`2 - O valor da variável exemplo é: ${exemplo}`)

            return function(exemplo){
                console.log(`3 - O valor da variável exemplo é: ${exemplo}`)
            }
        }
    }
}

// OUTRA FORMA DE EXECUTAR ESSA FUNÇÃO

function init() { // Essa função init retorna uma outra função
    const exemplo = 'Essa variável' // Cria uma variável exemplo

    return function(){
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`) // Todas as funções utilizam o valor de ${exemplo}

        return function(){
            console.log(`2 - O valor da variável exemplo é: ${exemplo}`)

            return function(){
                console.log(`3 - O valor da variável exemplo é: ${exemplo}`)
            }
        }
    }
}


// Cadeia de execução
// NÃO IREMOS USAR, APENAS PARA TÍTULO DE CONHECIMENTO.
init()()()(); // Executar todas funções em uma linha só.


