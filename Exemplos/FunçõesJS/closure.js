// Capacidade de uma função lembrar o ambiente em que foi criada.

function init() { // Essa função init retorna uma outra função
    const exemplo = 'Essa variável' // Cria uma variável exemplo

    return function(){
        console.log(`1 - O valor da variável wxemplo é: ${exemplo}.`)

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
